'use strict'

const ah = require('./asynchooks')
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    setTimeout(() => {
        try {
            throw new Error('MY ERROR')
        } catch (err) {
            console.log(ah.getError('MY ERROR'))
        }
    })
}

let server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})