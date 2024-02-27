const pairsAdd = (num) => {
  const list = []
  let result = 0
  while (num !== 0) {
    if (num % 2 === 0) {
      list.push(num)
      num -= 2
    }
    if (num % 2 === 1) num -= 1
  }
  list.forEach((item) => {
    result += item
  })
  console.log(result)
}

pairsAdd(12)
pairsAdd(11)

console.log(pairsAdd(process.argv[2]))

const vocals = (phrase) => {
  const vocalsOnText = phrase.match(/[aeiouAEIOU]/g)
  console.log(vocalsOnText)
  console.log(vocalsOnText.length)
  return vocalsOnText
}

vocals('esto es un texto random...')
