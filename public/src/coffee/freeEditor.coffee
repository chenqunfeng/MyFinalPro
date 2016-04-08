createGame = require "./common/canvasEditor.coffee"
releaseWin = require "./common/pubReleaseWinComponent.coffee"

create = {}
release = {}
create = new createGame(".createGameBox")
create.subscribe "EditorCanvas.loaded", () =>
    release = new releaseWin(create.data.link)

$(document).on "click", ".release", () ->
    release.open()

$(document).on "click", ".save", () ->
    create.saveCanvasConfig()

