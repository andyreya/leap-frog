scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Froggy.vy == 0) {
        Froggy.vy = -50
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
let Froggy: Sprite = null
scene.setBackgroundColor(9)
Froggy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . 7 . . 7 . . . . . . . . 
    . . . 7 . . 7 . . . . . . . . . 
    . . . 7 7 7 7 1 f . . . . . . . 
    . . . 7 7 7 7 1 1 . . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 1 1 . . . . . . . 
    . . . 7 7 7 7 1 f . . . . . . . 
    . . . 7 . . 7 . . . . . . . . . 
    . . . . 7 . . 7 . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Froggy)
tiles.setTilemap(tilemap`level1`)
Froggy.ay = 200
scene.cameraFollowSprite(Froggy)
