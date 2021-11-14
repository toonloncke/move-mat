radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        snelheid_bocht_in_draaiing_van_move_motor += 2
    } else {
        snelheid_bocht_in_draaiing_van_move_motor += -2
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(12)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-1544)
})
let snelheid_bocht_in_draaiing_van_move_motor = 0
radio.setGroup(87)
basic.forever(function () {
    for (let index = 0; index < Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left); index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, snelheid_bocht_in_draaiing_van_move_motor)
    }
})
basic.forever(function () {
    for (let index = 0; index < Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right); index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, snelheid_bocht_in_draaiing_van_move_motor)
    }
})
