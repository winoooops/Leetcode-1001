import { restoreIPAddresses } from "./index"

describe("Leetcode 93: Restore IP Addresses", () => {
  it("should be right", () => {
    const s = "25525511135" 
    expect(restoreIPAddresses(s)).toEqual(["255.255.11.135","255.255.111.35"])
  })

  it("should be right", () => {
    const s = "0000" 
    expect(restoreIPAddresses(s)).toEqual(["0.0.0.0"])
  })

  it("should be right", () => {
    const s = "101023" 
    expect(restoreIPAddresses(s)).toEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
  })
})
