input.onButtonPressed(Button.A, function () {
    A = 1000
    basic.pause(1000)
    item = item - A
    if (item == 5000) {
        basic.showLeds(`
            # # . # #
            # . . # #
            # # . # #
            . # . # #
            # # . # #
            `)
    }
    if (item == 4000) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            . # . # #
            . # . # #
            `)
    }
    if (item == 3000) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            . # . # #
            # # . # #
            `)
    }
    if (item == 2000) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (item == 1000) {
        basic.showLeds(`
            . # . # #
            . # . # #
            . # . # #
            . # . # #
            . # . # #
            `)
    }
    if (item <= 0) {
        basic.showLeds(`
            . # . # #
            # . . # #
            # # . # #
            # # . # #
            # # . # #
            `)
        item = 6000
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(item * 600)
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showString("End")
    basic.showLeds(`
        . # . # #
        # . . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    item = 6000
})
let A = 0
let item = 0
basic.showLeds(`
    . # . # #
    # . . # #
    # # . # #
    # # . # #
    # # . # #
    `)
item = 6000
