function solve(s){
 const reverseWord = s.split('').reverse().join('')
​
​
​
  if (reverseWord === s) return "OK"
​
​
​
  let isPosible = false
​
​
​
  for (let i = 0; i < reverseWord.length; i++) {
​
    const localWord = [...reverseWord]
​
​
​
    localWord.splice(i, 1)
​
​
​
    const reverseBack = [...localWord].reverse()
​
​
​
    if (localWord.join('') == reverseBack.join('')) {
​
      isPosible = true
​
    }
​
  }
​
​
​
​
​
  if (isPosible) return "remove one"
​
  else return 'not possible'
};