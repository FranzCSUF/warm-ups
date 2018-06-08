/* eslint-disable no-unused-vars */
var stopWatch = {
  isStarted: false,
  timeLimit: 0,
  timeElapsed: 0
}

function renderStopWatch(stopWatch) {
  var $div = document.createElement('div')
  var $h1 = document.createElement('h1')
  var $button = document.createElement('button')

  $div.className = 'stopWatch'
  $h1.className = 'timeElapsed'
  $h1.textContent = stopWatch.timeElapsed

  if (stopWatch.isStarted) {
    $button.textContent = 'Pause'
  }
  else {
    $button.textContent = 'Start'
  }

  if (stopWatch.timeElapsed === stopWatch.timeLimit) {
    $h1.className = 'time-elapsed is expired'
    $button.textContent = 'Reset'
  }
}
