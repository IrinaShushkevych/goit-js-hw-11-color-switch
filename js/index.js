import colors from '../db/colors.js'
import Ref from '../db/refs.js'
const { btnStartRef, btnStopRef, body } = Ref

let intervalId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function changeBG() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function changeEnableStartButton(btn) {
  btn.classList.contains('disabled')
    ? btn.removeAttribute('disabled')
    : btn.setAttribute('disabled', true)
  btn.classList.toggle('disabled')
}

function onStartInterval(e) {
  intervalId = setInterval(changeBG, 1000)
  changeEnableStartButton(btnStopRef)
  changeEnableStartButton(btnStartRef)
}

function onStopInterval() {
  clearInterval(intervalId)
  changeEnableStartButton(btnStopRef)
  changeEnableStartButton(btnStartRef)
}

btnStopRef.classList.add('disabled')
btnStartRef.addEventListener('click', onStartInterval)
btnStopRef.addEventListener('click', onStopInterval)
