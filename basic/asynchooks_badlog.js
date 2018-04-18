'use strict'

const asyncHooks = require('async_hooks')

// Create a new AsyncHook instance.
// enable() to start listening for new asynchronous events.
asyncHooks.createHook({ init, before, after, destroy }).enable()

function init (asyncId, type, triggerAsyncId, resource) {
    console.log(`type: ${type} asyncId: ${asyncId} trigger: ${triggerAsyncId}`)
}

function before (asyncId) {
    console.log(`BEFORE asyncId: ${asyncId}`)
}

function after (asyncId) {
    console.log(`AFTER asyncId: ${asyncId}`)
}

function destroy (asyncId) {
    console.log(`DESTROY asyncId: ${asyncId}`)
}

require('http').createServer((conn) => {}).listen(3000)
