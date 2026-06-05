export class Kata {
  static highAndLow(numbers: string): string {
    const splitStr : number[] = numbers.split(" ").map(Number)
​
    const highNum :number = Math.max(...splitStr)
​
    const minNum :number = Math.min(...splitStr)
​
    return `${highNum} ${minNum}`
  }
}