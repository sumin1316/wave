basic.forever(function () {
    if (30 > input.soundLevel()) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (100 < input.soundLevel()) {
        pins.servoWritePin(AnalogPin.P15, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P13, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P13, 180)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P15, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P13, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P13, 180)
        basic.pause(1000)
    } else {
    	
    }
})
