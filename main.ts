function motor_Backward (Speed: number) {
    if (Speed > 0.3) {
        wuKong.setAllMotor(Speed * 100, Speed * -100)
    }
}
function motor_init () {
    motor_stop()
}
function motor_Forward (Speed: number) {
    if (Speed > 0.3) {
        wuKong.setAllMotor(Speed * -100, Speed * 100)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == Cmd_C) {
        basic.showString("C")
    } else if (receivedString == Cmd_D) {
        basic.showString("D")
        motor_stop()
    } else if (receivedString == Cmd_E) {
        basic.showString("E")
    } else if (receivedString == Cmd_F) {
        basic.showString("F")
    } else if (receivedString == Cmd_A) {
        basic.showString("A")
    } else if (receivedString == Cmd_B) {
        basic.showString("B")
    } else if (receivedString == Cmd_Z) {
        basic.showString("Z")
    } else {
        basic.clearScreen()
        motor_stop()
    }
})
function motor_stop () {
    wuKong.stopAllMotor()
}
function motor_right (Speed: number) {
    if (Speed > 0.3) {
        wuKong.setAllMotor(Speed * -10, Speed * 100)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == Cmd_Up) {
        control_up(value)
    } else if (name == Cmd_Down) {
        control_down(value)
    } else if (name == Cmd_Left) {
        control_left(value)
    } else {
        control_right(value)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RadioGroupNum += 1
    if (RadioGroupNum > 5) {
        RadioGroupNum = 1
    }
    radio.setGroup(RadioGroupNum)
    basic.showString("BT" + RadioGroupNum)
})
function control_left (Value: number) {
    motor_left(Value)
    if (Value > 0.6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (Value > 0.3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
function control_up (Value: number) {
    motor_Forward(Value)
    if (Value > 0.6) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Value > 0.3) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
function control_down (Value: number) {
    motor_Backward(Value)
    if (Value > 0.6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Value > 0.3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
function motor_left (Speed: number) {
    if (Speed > 0.3) {
        wuKong.setAllMotor(Speed * -100, Speed * 10)
    }
}
function control_right (Value: number) {
    motor_right(Value)
    if (Value > 0.6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (Value > 0.3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
let Cmd_Z = ""
let Cmd_F = ""
let Cmd_E = ""
let Cmd_D = ""
let Cmd_C = ""
let Cmd_B = ""
let Cmd_A = ""
let Cmd_Left = ""
let Cmd_Down = ""
let Cmd_Up = ""
let RadioGroupNum = 0
wuKong.setLightMode(wuKong.LightMode.BREATH)
motor_init()
RadioGroupNum = 1
radio.setGroup(RadioGroupNum)
basic.showString("BT" + RadioGroupNum)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
Cmd_Up = "Cmd Up"
Cmd_Down = "Cmd Down"
Cmd_Left = "Cmd Left"
let Cmd_Right = "Cmd Right"
Cmd_A = "Cmd A"
Cmd_B = "Cmd B"
Cmd_C = "Cmd C"
Cmd_D = "Cmd D"
Cmd_E = "Cmd E"
Cmd_F = "Cmd F"
Cmd_Z = "Cmd Z"
let Cmd_Stop = "Cmd Stop"
