/**
 * python -m serial.tools.list_ports
 */
input.onButtonPressed(Button.A, function () {
    serial.writeLine("Hello")
})
let string = ""
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    string = serial.readString()
    if (string == "q") {
        led.plot(0, 0)
    } else if (string == "w") {
        led.plot(1, 0)
    } else if (string == "e") {
        led.plot(2, 0)
    } else if (string == "r") {
        led.plot(3, 0)
    } else if (string == "t") {
        led.plot(4, 0)
    } else {
        basic.clearScreen()
    }
})
