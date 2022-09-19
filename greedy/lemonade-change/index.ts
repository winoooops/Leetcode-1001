export function lemonadeChange(bills: number[]): boolean {
  let fiveBucks: number = 0 
  let tenBucks: number = 0


  for(let i = 0; i < bills.length; i++) {
    if(bills[i] === 5) {
      fiveBucks++
    } else if(bills[i] === 10) {
      tenBucks++
      fiveBucks--
    } else {
      if(tenBucks > 0) {
        tenBucks--
        fiveBucks--
      } else {
        fiveBucks -= 3
      }
    }

    if(fiveBucks < 0 || tenBucks < 0) return false
  }

  return true
}
