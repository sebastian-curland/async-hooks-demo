'use strict'

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    throw new Error('MY ERROR')
}

let server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})