export function combinations(n: number, k: number) {
  function backTracking(n: number, k: number , start: number, path: number[]) {
    // 注意这里需要复制path这个数组, 因为for循环存在执行栈里会等到结束时候才执行, 不准确
    if(path.length === k) return result.push([...path])

    for(let i = start ; i <= n - (k - path.length) + 1; i++) {
      path.push(i)

      backTracking(n, k, i+1, path)

      path.pop()
    }
  }

  const result: number[][] = []
  backTracking(n, k, 1, [])

  return result
}
