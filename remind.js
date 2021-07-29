const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Darkness, My Old Friend. I come to see you off again!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})