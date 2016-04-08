loginBox = require "./common/loginComponent.coffee"
registerBox = require "./common/registerComponent.coffee"

login = new loginBox()
register = new registerBox()

$(document).on "click", ".loging, .toLogin", () ->
    login.open()
    register.close()
$(document).on "click", ".registing, .toRegister", () ->
    login.close()
    register.open()