'use strict'

const Five = require('johnny-five')
const Raspi = require('raspi-io')

const board = Five.Board({
  repl: false,
  io: new Raspi()
})
let led
let button

board.on('ready', function () {
  led = new Five.Led('P1-37')
  button = new Five.Button('P1-40')

  button.on('press', () => {
    led.toggle()
  })

  this.on('exit', () => {
    led.off()
  })
})

