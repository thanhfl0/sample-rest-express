const express = require('express')
const app = express()
const port = process.env.PORT ?? 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/healthcheck', (req, res) => {
  res.send('Healthy!')
})

app.listen(port, () => {
  console.log(`Rest example app listening on port ${port}`)
})
