'use strict'

const ah = require('./asynchooks')

const f1 = () => {
  setTimeout(()=>{
    f2()
  })
}

const f2 = () => {
  setTimeout(()=>{
    f3()
  })
}

const f3 = () => {
  try {
    throw new Error('MY ERROR')
  } catch (err) {
    console.log(ah.getError('MY ERROR'))
  }
}

f1()