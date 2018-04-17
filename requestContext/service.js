'use strict'

const ah = require('./asynchooks')

class RequestService {
    static getContext () {
        return ah.getRequestContext()
    }
}

module.exports = RequestService