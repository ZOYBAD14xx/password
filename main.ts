input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == entry) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 80)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    basic.clearScreen()
    entry = ""
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "B"
})
let entry = ""
let password = ""
password = "AABAB"
entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
