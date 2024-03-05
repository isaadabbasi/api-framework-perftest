const fs = require('fs')
const express = require('express')

const users300 = fs.readFileSync('./users-300.json', 'utf-8')

const app = express()

app.get('/', (request, response) => {
  response.status(200).send('Ok')
})

app.get('/api/users-50', (_, response) => {
  const lessUsers = fs
    .createReadStream('./users-50.json', 'utf8')
  lessUsers.pipe(response)
})

app.get('/api/users-300', (_, response) => {
  const moreUsers = fs
    .createReadStream('./users-300.json', 'utf8')
  moreUsers.pipe(response)
})

app.get('/api/users-300-c', (_, response) => {
  response.status(200).send(users300)
})

app.listen(3002, () => void 
  console.log('express app listening on port 3002')
)