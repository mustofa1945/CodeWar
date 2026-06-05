export function toCamelCase(str:string):string{
    const result : string = str.replace(/[-_]([a-zA-Z])/g, (_, match) => match.toUpperCase());
​
      return result
}