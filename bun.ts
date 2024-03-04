import { Hono } from 'hono'
import fs from 'fs'

const app = new Hono()

const moreUsers = fs
  .readFileSync('users-300.json', 'utf8')

app.get('/', () => new Response('Ok'))
app.get('/api/users-50', () => {
  const lessUsers = Bun.file('users-50.json')
  return new Response(lessUsers.stream())
})
app.get('/api/users-300', () => {
  const moreUsers = Bun.file('users-300.json')
  return new Response(moreUsers.stream())
})
app.get('/api/users-300-c', () => {
  return new Response(moreUsers)
})

export default {
  port: 3000,
  fetch: app.fetch,
}
