'use strict'

const f1 = () => {
  f2()
}

const f2 = () => {
  f3()
}

const f3 = () => {
  throw new Error('MY ERROR')
}

f1()