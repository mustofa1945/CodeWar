export const isPangram = (phrase: string): boolean => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  
  return alphabet.every(al => phrase.toLowerCase().includes(al))
}