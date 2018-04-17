const express = require('express')
const ah = require('./asynchooks')
const RequestService = require('./service')
const app = express()
const port = 3000

app.use( (request, response, next) => {
    const data = {headers: request.headers}
    ah.createRequestContext(data)
    next()
})

const requestHandler = (request, response, next) => {
    const reqContext = RequestService.getContext()
    response.json(reqContext)
    next()
}

app.get('/', requestHandler)

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})