export class MyQueue {
  private stackIn: number[] 
  private stackOut: number[]

  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  push(v: number){
    this.stackIn.push(v)
  }

  pop(){
    if(this.stackOut.length === 0) this.dump()  
    return this.stackOut.pop()
  }

  peek() {
    if(this.stackOut.length === 0) this.dump() 
    return this.stackOut[this.stackOut.length - 1]
  }

  empty() {
    return this.stackIn.length === 0 && this.stackOut.length === 0
  }

  private dump() {
    while(this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop())
    }
  }
}
