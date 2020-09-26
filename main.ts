let distance = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P9, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P10, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P11, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P11, PulseValue.High), 58)
    basic.showNumber(distance)
    basic.pause(100)
})
