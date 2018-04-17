'use strict'

const asyncHooks = require('async_hooks')
const map = new Map()

asyncHooks.createHook({ init }).enable()

function init(asyncId, type, triggerAsyncId, resource) {
    const parentStack = map.get(triggerAsyncId) || ''
    let currentStack = {}
    Error.captureStackTrace(currentStack)
    map.set(asyncId, currentStack.stack + parentStack)
}

const getError = function (...args) {
    const err = new Error(...args)
    err.stack += map.get(asyncHooks.executionAsyncId())
    return err
}

module.exports.getError = getError