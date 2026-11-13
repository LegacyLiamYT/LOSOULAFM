function Boot_OR_Recover () {
    class bootOption {
        name: string
        executable: Function
    }
usernames = ["root"]
    currentUsername = usernames[currentUser]
    bootMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Boot Regular", assets.image`Leftarrow`),
    miniMenu.createMenuItem("Recover Data", assets.image`Warn-White`)
    )
    miniMenu.setTitle(bootMenu, "Choose a boot option")
    miniMenu.setDimensions(bootMenu, scene.screenWidth(), scene.screenHeight())
    bootMenu.top = 0
    bootMenu.left = 0
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 4)
    scene.setBackgroundColor(4)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Padding, 5)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Title, miniMenu.StyleProperty.Padding, 4)
    miniMenu.setStyleProperty(bootMenu, miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 6)
    miniMenu.onButtonPressed(bootMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    	
    })
    miniMenu.onButtonPressed(bootMenu, miniMenu.Button.B, function (selection, selectedIndex) {
        panic("0xFFFFFF")
    })
}
function startLosoulafm () {
	
}
function panic (message: string) {
    music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    scene.setBackgroundImage(img`
        . 
        `)
    scene.setBackgroundColor(0)
    spriteutils.setConsoleOverlay(true)
    console.log("An error has occurred.")
    console.log(createBorderString(message.length))
    console.log(message)
    console.log(createBorderString(message.length))
    pauseUntil(() => false)
}
function createBorderString (length: number) {
    return "-------------------------"
}
let bootMenu: Sprite = null
let currentUser = 0
let currentUsername = ""
let usernames: string[] = []
let bootOptions: number[] = []
Boot_OR_Recover()
game.onUpdate(function () {
    currentUsername = usernames[currentUser]
})
