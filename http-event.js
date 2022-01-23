const http = require('http')

// invokes the req res callback every time a request is sent to the server
// const server = http.createServer((req, res) => {
//   res.end('welcome')
// })

// same concept using the Even Emitter API
const server = http.createServer()
// http API has built in request event
// server subsribes to the request event and listens for it, sending a response when the request fires
server.on('request', (req, res) => {
  res.end('welcome')
})

server.listen(5000, () => {
  console.log('server listening on port 5000')
})