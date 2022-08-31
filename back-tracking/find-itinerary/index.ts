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