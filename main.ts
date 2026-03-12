namespace NumArrayProp {
    export const Damage = NumArrayProp.create()
    export const Defend = NumArrayProp.create()
}
namespace StrProp {
    export const Consume = StrProp.create()
}
namespace StrArrayProp {
    export const Name = StrArrayProp.create()
    export const Consume = StrArrayProp.create()
    export const Create = StrArrayProp.create()
}
namespace ImageArrayProp {
    export const Images = ImageArrayProp.create()
}
namespace AnyProp {
    export const Defend = AnyProp.create()
    export const Damage = AnyProp.create()
}
function CardText (color: number, x: number, y: number, text2: string, myImage: Image) {
    fancyText.draw(text2, myImage, x, y, 45, color, fancyText.tiny_4)
}
function CardValueAttach (mySprite: Sprite, text2: string) {
    TextIndex = blockObject.getStringArrayProperty(CardArray, StrArrayProp.Name).indexOf(text2)
}
function CardImage (text2: string) {
    TextIndex = blockObject.getStringArrayProperty(CardArray, StrArrayProp.Name).indexOf(text2)
    Card = img`
        cccccccccccccccccccccccccccccccccccccccccccccccccc
        c888888888888888888888888888888888888888888888888c
        c888888888888888888888888888888888888888888888888c
        c888888888888888888888888888888888888888888888888c
        c888cccccccccccccccccccccccccccccccccccccccccc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cdddd22222222222222222222222222222222ddddc888c
        c888cdddd22222222222222222222222222222222ddddc888c
        c888cdddd2eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e............................e2ddddc888c
        c888cdddd2e2222222222222222222222222222e2ddddc888c
        c888cdddd2eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2ddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cddddddddddddddddddddddddddddddddddddddddc888c
        c888cccccccccccccccccccccccccccccccccccccccccc888c
        c888888888888888888888888888888888888888888888888c
        c888888888888888888888888888888888888888888888888c
        c888888888888888888888888888888888888888888888888c
        cccccccccccccccccccccccccccccccccccccccccccccccccc
        `
    Card.drawTransparentImage(blockObject.getImageArrayProperty(CardArray, ImageArrayProp.Images)[TextIndex], 11, 17)
    if (0 < blockObject.getNumberArrayProperty(CardArray, NumArrayProp.Damage)[TextIndex]) {
        CardText(10, 7, 48, "" + blockObject.getNumberArrayProperty(CardArray, NumArrayProp.Damage)[TextIndex] + " DMG", Card)
    }
    if (0 < blockObject.getNumberArrayProperty(CardArray, NumArrayProp.Defend)[TextIndex]) {
        CardText(10, 7, 48, "" + blockObject.getNumberArrayProperty(CardArray, NumArrayProp.Defend)[TextIndex] + " DFND", Card)
    }
    CardText(10, 5, 6, text2, Card)
    return Card
}
let Card: Image = null
let TextIndex = 0
let CardArray: blockObject.BlockObject = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
CardArray = blockObject.create()
blockObject.setImageArrayProperty(CardArray, ImageArrayProp.Images, [assets.image`CutImg`, assets.image`BlockImg`])
blockObject.setStringArrayProperty(CardArray, StrArrayProp.Name, [
"Cut",
"Block",
"Inferno",
"Wildfire"
])
blockObject.setNumberArrayProperty(CardArray, NumArrayProp.Damage, [
6,
0,
0,
14
])
blockObject.setNumberArrayProperty(CardArray, NumArrayProp.Defend, [
0,
5,
3,
0
])
// Value can be
// 1. Empty
// 2. Fire
// 3. Water
// 4. Electric
// 5. Air
// 6. Random (switches each turn to 2-5)
blockObject.setStringArrayProperty(CardArray, StrArrayProp.Consume, [
"None",
"None",
"Fire",
"None"
])
// Value can be
// 1. Empty
// 2. Fire
// 3. Water
// 4. Electric
// 5. Air
// 6. Random (switches each turn to 2-5)
blockObject.setStringArrayProperty(CardArray, StrArrayProp.Create, [
"None",
"None",
"Fire",
"None"
])
let CardsInBackpack = [blockObject.create()]
let mySprite = sprites.create(CardImage("Block"), SpriteKind.Player)
