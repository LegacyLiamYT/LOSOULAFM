function MyBootMan () {
    bootMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("SDA1: \"LOSOULAFM\""),
    miniMenu.createMenuItem("SDB1: \"Recovery Medium\"")
    )
    miniMenu.setTitle(bootMenu, "MyBootMan Boot Menu")
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
}
let bootMenu: Sprite = null
MyBootMan()
