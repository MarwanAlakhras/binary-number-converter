input.onPinPressed(TouchPin.P0, function () {
    while (input2 > multiplier) {
        multiplier = multiplier * 2
        position += -1
        basic.showNumber(multiplier)
    }
    if (multiplier > input2) {
        multiplier = multiplier / 2
        position += 1
        basic.showNumber(multiplier)
    }
    basic.clearScreen()
    while (input2 > 0) {
        if (input2 >= multiplier) {
            led.plot(position % 5, position / 5)
            input2 = input2 - multiplier
        }
        multiplier = multiplier / 2
        position += 1
    }
})
input.onButtonPressed(Button.A, function () {
    input2 += _1change
    basic.showNumber(input2)
})
input.onButtonPressed(Button.AB, function () {
    input2 += _100change
    basic.showNumber(input2)
})
input.onButtonPressed(Button.B, function () {
    input2 += _10change
    basic.showNumber(input2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    _1change = _1change * -1
    _10change = _10change * -1
    _100change = _100change * -1
})
let position = 0
let multiplier = 0
let _100change = 0
let _10change = 0
let _1change = 0
let input2 = 0
input2 = _1change
_1change = 1
_10change = 10
_100change = 100
multiplier = 1
position = 24
