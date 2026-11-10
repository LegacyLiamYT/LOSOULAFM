function MyBootMan () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("SDA1: \"LOSOULAFM\""),
    miniMenu.createMenuItem("SDB1: \"Recovery Medium\"")
    )
    miniMenu.setTitle(myMenu, "MyBootMan Boot Menu")
}
let myMenu: Sprite = null
MyBootMan()
