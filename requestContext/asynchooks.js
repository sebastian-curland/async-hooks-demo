'use strict'

const asyncHooks = require('async_hooks')
const fs = require('fs')
const util = require('util')
const uuid = require('uuid')
const contextMap = new Map()

const asyncHook = asyncHooks.createHook({ init, destroy })
asyncHook.enable()

function init (asyncId, type, triggerAsyncId, resource) {
    // debug('asyncId', asyncId, 'triggerAsyncId', triggerAsyncId, 'type', type)

    // Store same request object for child async resources
    if (contextMap.has(triggerAsyncId)) {
        contextMap.set(asyncId, contextMap.get(triggerAsyncId))
    }
}

function destroy (asyncId) {
    if (contextMap.has(asyncId)) {
        contextMap.delete(asyncId)
    }
}

function debug (...args) {
    fs.writeSync(1, `${util.format(...args)}\n`)
}

module.exports.createRequestContext = function (data, requestId = uuid()) {
    const requestData = Object.assign({requestId}, {data})
    contextMap.set(asyncHooks.executionAsyncId(), requestData)
    return requestData
}

module.exports.getRequestContext = function () {
    return contextMap.get(asyncHooks.executionAsyncId())
}
