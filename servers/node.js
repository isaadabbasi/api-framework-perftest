const http = require('http')
const fs = require('fs')

const users300 = fs.readFileSync('./users-300.json', 'utf-8')
const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('Ok')
  } else if (request.url === '/api/users-50') {
    const lessUsers = fs.createReadStream('./users-50.json', 'utf8')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    lessUsers.pipe(response)
  } else if (request.url === '/api/users-300') {
    const moreUsers = fs.createReadStream('./users-300.json',  'utf8')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    moreUsers.pipe(response)
  } else if (request.url === '/api/users-300-c') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(users300)
  } else {
    // Handle invalid routes
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Not Found' }))
  }
})

app.listen(3001, () => void console.log('server listening on port 3001'))