createGame = require "./common/createGameComponent.coffee"
releaseWin = require "./common/pubReleaseWinComponent.coffee"

create = {}
release = {}
create = new createGame(".createGameBox")
create.subscribe "createGame.loaded", () =>
    release = new releaseWin(create.data.link)

$(document).on "click", ".release", () ->
    release.open()
    
