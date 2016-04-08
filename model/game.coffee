mongoose = require('mongoose')

Schema = mongoose.Schema

_Game = new Schema
    data: {
        defaultConfig: {
            items: [{
                type: {type: String}
                key_name: {type: String}
                key_title: {type: String}
                key_value: {type: String}
                key_describe: {type: String}
                }]
            link: {type: String}
        }
    }
    time: {type: Date, default: Date.now}

_Game.on 'init', (model) ->
    console.log 'Game collection init!'
# 静态方法
_Game.statics.findMethod = (condition, callback)->
    return @model('mongoose').find(condition,callback)

exports.Game = mongoose.model("Game", _Game)
