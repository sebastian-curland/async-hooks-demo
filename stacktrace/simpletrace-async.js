'use strict'

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
  setTimeout(()=>{
    throw new Error('MY ERROR')
  })
}

f1()