/* eslint-disable no-unused-vars */
function padLeft(string, padding, maxLength) {
  var pad = ''
  var padLength = (maxLength - string.length)
  for (var i = 0; i < padLength; i++) {
    pad += padding
  }
  return pad + string
}

function padRight(string, padding, maxLength) {
  var pad = ''
  var padLength = (maxLength - string.length)
  for (var i = 0; i < padLength; i++) {
    pad += padding
  }
  return string + pad
}
