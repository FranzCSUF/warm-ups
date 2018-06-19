/* eslint-disable no-unused-vars */
function curryedAdd(a) {
  return function number(b) {
    return a + b
  }
}

console.log(curryedAdd(6)(2))
