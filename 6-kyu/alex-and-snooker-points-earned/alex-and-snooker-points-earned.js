function frame(balls) {
  
  if(balls.includes('W')) return 'Foul'
​
 const addText =  balls.replace(/(Bk|Be|Bn|R|Y|G|P)(?!\d)/g, "$11")
​
  const splitStr= addText.split(/(?<=\d)(?=[a-zA-Z])/)
​
  const result = splitStr.reduce((acc, curr) => {
​
    const [k, n] = curr.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)
​
    acc.push({ key: k, num: Number(n) })
​
    return acc
  }, [])
​
​
  let totalPoint = 0
​
  result.forEach(el => {
       if (el.key == "R") totalPoint += el.num * 1
    if (el.key == "Y") totalPoint += el.num * 2
    if (el.key == "G") totalPoint += el.num * 3
    if (el.key == "Bn") totalPoint += el.num * 4
    if (el.key == "Be") totalPoint += el.num * 5
    if (el.key == "P") totalPoint += el.num * 6
    if (el.key == "Bk") totalPoint += el.num * 7
  })
​
  return totalPoint > 147 ? "invalid data" : totalPoint
}
​