# 322.重新安排行程

给你一份航线列表 `tickets` ，其中 `tickets[i] = [fromi, toi]` 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。

例如，行程 `["JFK", "LGA"]` 与 `["JFK", "LGB"]` 相比就更小，排序更靠前。
假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。

## 示例 

![example-1](../../static/img/back-tracking/itinerary1-graph.jpeg)
```
输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
输出：["JFK","MUC","LHR","SFO","SJC"]
```

![example-2](../../static/img/back-tracking/itinerary2-graph.jpeg)
```
输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"] ，但是它字典排序更大更靠后。
```

## 思路

如果先把ticket数组进行哈希之后可以发现, 这个结果也是能够用树状图表示出来的, 但是需要考虑两种特殊情况 
回溯三部走: 
1. 需要的参数: 因为这里的结果只需要返回一条路径, 所以只需要一个全局变量`path: string[]`即可; 除此之外需要加入一个`ticketMap: Map<string, string[]>`(构造的时候需要排序)  
2. 循环终止的条件: 
  * 找到路径: `if(path.length === tickets.length + 1) return true`; 
  * 搜索到了终点, 终点没有作为起点出现过`if(!ticketMap.get(path[path.length - 1]) || !ticketMap.get(path[path.length - 1]).length ) return false`
3. 需要处理的逻辑如下

### 多次从某处出发, 需要删掉走过的路径 
![one](../../static/img/back-tracking/itinerary1.png)

这个时候就要注意如果某个路径已经走过, 那么需要从数组中删掉 
`ticketMap.get(path[path.length - 1])?.splice(i, 1)`

### 某个地方只出现过一次, 为行程的终点, 需要回溯
![two](../../static/img/back-tracking/itinerary2.png)


```typescript 
export function findItinerary(tickets: string[][]): string[] {
  let path: string[] = ["JFK"]

  if (!tickets.length) return path

  // first create a map so I could use it to create trees later 
  const ticketMap = prepare(tickets)

  function backTracking() {
    if (path.length === tickets.length + 1) {
      return true
    }

    const departure = path[path.length - 1]
    const destinations = ticketMap.get(departure)


    // 如果找不到终点, 那么就是走错了, 给一个回溯的标识
    if (!destinations || !destinations.length) {
      return false
    }

    for (let i = 0; i < destinations.length; i++) {
      let city = destinations[i]
      // 防止重复走, 陷入死循环
      ticketMap.get(path[path.length - 1])?.splice(i, 1)
      path.push(city)

      // 如果成功找到结果, 就不走回头路了, 直接走到底
      if (backTracking()) {
        return true
      }

      // 如果未找到结果, 需要回溯
      path.pop()
      ticketMap.get(path[path.length - 1])?.splice(i, 0, city)
    }
  }

  backTracking()

  return path
}

export function prepare(tickets: string[][]): Map<string, string[]> {

  const ticketMap: Map<string, string[]> = new Map()

  for (let t of tickets) {
    let from = t[0]
    let to = t[1]

    let isFound = ticketMap.get(from)

    if (isFound) {
      ticketMap.set(from, [...isFound, to].sort())
    } else {
      ticketMap.set(from, [to])
    }
  }

  return ticketMap
}
```

