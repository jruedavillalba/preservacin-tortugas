basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 34) {
        basic.showString("T. Alta")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(3000)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
    basic.pause(2000)
    basic.showString("T. Normal")
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(3000)
    basic.clearScreen()
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showString("T. Baja")
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # .
            # . . . #
            # # # # #
            `)
        basic.pause(3000)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
})
