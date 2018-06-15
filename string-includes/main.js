/* eslint-disable no-unused-vars */
function includes(string, substring) {
  var answer = false
  if (substring === '') {
    answer = true
  }
  if (substring.length === 1) {
    for (var p = 0; p < string.length; p++) {
      if (string[p] === substring[0]) {
        answer = true
      }
    }
  }
  if (substring.length > 1) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === substring[0]) {
        for (var o = 0; o < substring.length; o++) {
          if (substring[o] === string[i + o]) {
            answer = true
          }
          else answer = false
        }
      }
    }
  }
  return answer
}
