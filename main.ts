input.onButtonPressed(Button.A, function () {
    icone = randint(0, 39)
    basic.showIcon(icone)
})
function incrementerCanal (num: number) {
    return num++
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    let canal = 0
    compteur = randint(0, 9999)
    radio.setGroup(incrementerCanal(canal))
})
let compteur = 0
let icone = 0
