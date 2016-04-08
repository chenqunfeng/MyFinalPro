##
# 创建游戏组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"

class GameCenterBox extends com.Components
    constructor: () ->
        super()
        @init()
    init: () ->
        console.log 1
module.exports = GameCenterBox