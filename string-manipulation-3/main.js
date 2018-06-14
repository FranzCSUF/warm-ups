/* eslint-disable no-unused-vars */
function padLeft(string, padding, maxLength) {
  var pad = ''
  var finalString = string + pad
  if (padding.length > 1) {
    for (var i = 0; i < maxLength - string.length; i++) {
      if (pad.charAt(pad.length - 1) === padding[0]) {
        pad += padding[1]
      }
      else pad += padding[0]
    }
  }
  else {
    var padLength2 = (maxLength - string.length)
    for (var o = 0; o < padLength2; o++) {
      pad += padding
    }
  }
  return pad + string
}

function padRight(string, padding, maxLength) {
  var pad = ''
  var finalString = string + pad
  if (padding.length > 1) {
    for (var i = 0; i < maxLength - string.length; i++) {
      if (pad.charAt(pad.length - 1) === padding[0]) {
        pad += padding[1]
      }
      else pad += padding[0]
    }
  }
  else {
    var padLength2 = (maxLength - string.length)
    for (var o = 0; o < padLength2; o++) {
      pad += padding
    }
  }
  return string + pad
}
