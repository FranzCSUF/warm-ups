/* eslint-disable no-unused-vars */
function indexOf(string, substring) {
  var index = -1
  if (substring === '') {
    index = 0
  }
  if (substring.length === 1) {
    for (var p = 0; p < string.length; p++) {
      if (string[p] === substring[0]) {
        index = p
      }
    }
  }
  if (substring.length > 1) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === substring[0]) {
        for (var o = 0; o < substring.length; o++) {
          if (substring[0] === string[i + o]) {
            index = i
          }
        }
      }
    }
  }
  return index
}
