input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let objeto: game.LedSprite = null
let jugador: game.LedSprite = null
jugador = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    objeto = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        objeto.change(LedSpriteProperty.Y, 1)
    }
    if (objeto.isTouching(jugador)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    objeto.delete()
})
