const express = require('express')
const app = express()

const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello!' })
})

// IS EVEN?
app.get('/math/:isEven', async (req, res) => {
  try {
    const { isEven } = req.params
    if (isEven % 2 === 0) {
      res.send({ even: 'true' })
    } else {
      res.send({ even: 'false' })
    }
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

// THROW EVEN NUMBERS BEFORE
app.get('/math2/:allEven', async (req, res) => {
  try {
    const { allEven } = req.params
    const numbers = []
    for (let i = 0; i <= allEven; i++) {
      if (i % 2 === 0) numbers.push(i)
    }
    res.send({ even: numbers })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
