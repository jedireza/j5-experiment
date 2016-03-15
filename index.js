'use strict'

const Five = require('johnny-five')
const Raspi = require('raspi-io')

const board = Five.Board({
  repl: false,
  io: new Raspi()
})
let led
let led2

board.on('ready', function () {
  led = new Five.Led('P1-37')
  led2 = new Five.Led('P1-40')

  led.blink()

  setTimeout(() => {
    led2.blink()
  }, 250)

  this.on('exit', () => {
    led.off()
    led2.off()
  })
})

