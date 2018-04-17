'use strict'
const fs = require('fs')
const asyncHooks = require('async_hooks')

// Create a new AsyncHook instance.
// enable() to start listening for new asynchronous events.
asyncHooks.createHook({ init, before, after, destroy }).enable()

function init (asyncId, type, triggerAsyncId, resource) {
    fs.writeSync(1, `INIT asyncId: ${asyncId} type: ${type} trigger: ${triggerAsyncId}\n`)
    // fs.writeSync(1, Object.keys(resource) + '\n')
}

function before (asyncId) {
    fs.writeSync(1,`BEFORE asyncId: ${asyncId}\n`)
}

function after (asyncId) {
    fs.writeSync(1,`AFTER asyncId: ${asyncId}\n`)
}

function destroy (asyncId) {
    fs.writeSync(1,`DESTROY asyncId: ${asyncId}\n`)
}

require('net').createServer((conn) => {}).listen(8080)
