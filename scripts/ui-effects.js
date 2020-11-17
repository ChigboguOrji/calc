'use strict';
// console.log = function(){}
console.log('ui loaded')
export const elems = {
  ints : document.querySelectorAll('.int'),
  ops : document.querySelectorAll('.operator'),
  equals : document.getElementById('equals'),
  accUI : document.getElementById('cal-result'),
  result : document.getElementById('result')
}

const menuToggler = document.querySelector('#menu-toggler')
const drawer = document.querySelector('.menu-drawer--aside')

const setLabel = (label) => {
  let btnLabel = label.trim()
  btnLabel === '&#9776;' ? (btnLabel = 'X') : (btnLabel = '&#9776;')
  console.log(btnLabel)
  return btnLabel
}

const toggleDrawerState = (e) => {
  drawer.classList.contains('drawer--open') ? drawer.classList.remove('drawer--open') : drawer.classList.add('drawer--open')
  e.target.innerHTML = setLabel(e.target.innerHTML)
}


menuToggler.addEventListener('click', toggleDrawerState)