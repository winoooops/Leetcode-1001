import { findItinerary, prepare } from "./index"

describe("Leetcode 332: Reconstruct Itinerary", () => {
  it("should be right", () => {
    const tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]] 
    expect(findItinerary(tickets)).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"])
  })

  it("should be right", () => {
    const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
    expect(findItinerary(tickets)).toEqual(["JFK","ATL","JFK","SFO","ATL","SFO"])
  })

  it("should be right", () => {
    const tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
    expect(findItinerary(tickets)).toEqual(["JFK","NRT","JFK","KUL"])
  })
})
