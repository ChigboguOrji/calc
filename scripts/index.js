'use strict';
import * as mod from './ui-effects.js'
const ints = mod.elems.ints
const ops = mod.elems.ops
const equals = mod.elems.equals
const accUI = mod.elems.accUI
const result = mod.elems.result
const clearBtn = mod.elems.clearBtn
let accumulator = []

ints.forEach(int => {
  int.addEventListener('click', (e) => {
    accumulator.push(int.dataset.value)
    mod.setElemValue(accUI, accumulator.slice(0).join(''))
  })
})

ops.forEach(op => {
  op.addEventListener('click', () => {
    accumulator.push(op.dataset.value)
    mod.setElemValue(accUI, accumulator.slice(0).join(''))
  })
})

equals.addEventListener('click', () => {
  const acc = [...accumulator]
  if (!acc.length) {
    console.log('Nope..')
    return false
  }
  const total = eval(acc.slice(0).join(''))
  mod.setElemValue(result, total)
  accumulator = [] // empty accumulator
})

/**
 * Here we clear the result field by empyting the accumulator array
 * First we check if the command is to clear the last value [C] or
 * or emptying the entire array element
 */
clearBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.dataset.id)
    const option = btn.dataset.id.toUpperCase()
    let acc = [...accumulator]
    if ((!acc.length && !accUI.value)) {
      console.log('Nothing to clear', accUI.value)
      mod.setElemValue(accUI, 0)
      return false
    }
    if (option === 'CE') {
      console.log('Cleared all')
      acc = []
      accumulator = acc
      mod.setElemValue(accUI, 0)
      mod.setElemValue(result, 0)
      return
    } else {
      if (accUI.value === 0 && !accumulator.length) {
        console.log('Removed the last already')
        return
      }
      console.log('Removed the last')
      const elem = [...accumulator]
      const lastValue = elem.pop()
      console.log(elem, lastValue)
      accumulator = [...elem]
      mod.setElemValue(accUI, elem.slice(0).join(''))
    }
  })
})