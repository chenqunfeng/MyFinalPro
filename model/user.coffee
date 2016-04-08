mongoose = require('mongoose')

Schema = mongoose.Schema

_User = new Schema
    username: {type: String}
    password: {type: String}
    time: {type: Date, default: Date.now}

_User.on 'init', (model) ->
    console.log 'User collection init!'
# 静态方法
_User.statics.findMethod = (condition, callback)->
    return @model('mongoose').find(condition,callback)

exports.User = mongoose.model("User", _User)
