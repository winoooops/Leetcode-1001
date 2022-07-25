 export class MyQueue {
   private stackOne: number[] 
   private stackTwo: number[]

   constructor() {
     this.stackOne = []
     this.stackTwo = []
   }

   push(v: number) {
     this.stackOne.push(v)
   }

   pop() {
     while(this.stackOne.length > 0) {
       this.stackTwo.push(this.stackOne.pop())
     }

     let tmp = this.stackTwo.pop()

     while(this.stackTwo.length > 0) {
       this.stackOne.push(this.stackTwo.pop())
     }

     return tmp
   }

   peek() {
     while(this.stackOne.length > 0) {
       this.stackTwo.push(this.stackOne.pop())
     }

     let tmp = this.stackTwo[this.stackTwo.length - 1]

     while(this.stackTwo.length > 0) {
       this.stackOne.push(this.stackTwo.pop())
     }

     return tmp
   }

   empty() {
     return this.stackOne.length === 0 && this.stackTwo.length === 0
   }
 }
