/* eslint-disable no-unused-vars */
function startsWith(string, substring) {
  var check = ''
  if (string === '' || substring === '') {
    check = true
  }
  for (var i = 0; i < substring.length; i++) {
    if (substring[i] === string[i]) {
      check = true
    }
    else {
      check = false
      break
    }
  }
  return check
}

function endsWith(string, substring) {
  var check = ''
  if (string === '' || substring === '') {
    check = true
  }
  for (var i = 0; i < substring.length; i++) {
    var index = (string.length - substring.length) + i
    if (substring[i] === string[index]) {
      check = true
    }
    else {
      check = false
    }
  }
  return check
}
