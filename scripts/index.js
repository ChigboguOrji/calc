'use strict';
import * as mod from './ui-effects.js'
const ints = mod.elems.ints
const ops = mod.elems.ops
const equals = mod.elems.equals
const accUI = mod.elems.accUI
const result = mod.elems.result

let accumulator = []


const setElemValue = (target, value) => {
  target.value = value
}

ints.forEach(int => {
  int.addEventListener('click', (e) => {
    accumulator.push(int.dataset.value)
    setElemValue(accUI, accumulator.slice(0).join(''))
  })
})

ops.forEach(op => {
  op.addEventListener('click', () => {
    accumulator.push(op.dataset.value)
    setElemValue(accUI, accumulator.slice(0).join(''))
  })
})

equals.addEventListener('click', () => {
  const acc = [...accumulator]
  if (!acc.length) {
    console.log('Nope..')
    return false
  }
  const total = eval(acc.slice(0).join(''))
  setElemValue(result, total)
  accumulator = [] // empty accumulator
})