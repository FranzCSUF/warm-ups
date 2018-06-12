/* eslint-disable no-unused-vars */
function firstChar(string) {
  return string[0]
}

function lastChar(string) {
  var last = string.length - 1
  return string[last]
}

function repeat(repeat, number) {
  var finalString = ''
  for (var i = 0; i < number; i++) {
    if (number > 0) {
      finalString += repeat
    }
  }
  return finalString
}

function ransomCase(string) {
  var finalString = ''
  for (var i = 0; i < string.length; i++) {
    if (i % 2) {
      finalString += string[i].toUpperCase()
    }
    else finalString += string[i].toLowerCase()
  }
  return finalString
}

function reverse(string) {
  var verseString = ''
  for (var i = string.length - 1; i >= 0; i--) {
    verseString += string[i]
  }
  return verseString
}

function capitalize(string) {
  if (string === '') {
    return ''
  }
  var capFirst = string[0].toUpperCase()
  var word = string.slice(1).toLowerCase()
  return capFirst + word
}
