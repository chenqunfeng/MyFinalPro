mongoose = require('mongoose')

Schema = mongoose.Schema

_UserGame = new Schema
    data: {
        # 这里坚持再使用一个defaultConfig可以监测用户修改过哪一个配置
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
        userConfig: {
            items: [{
                key_name: {type: String}
                key_value: {type: String}
                }]
            link: {type: String}
        }
        stage: {type: Array}
        tw: {type: Array}
    }
    status: {type: String}
    userId: {type: String}
    time: {type: Date, default: Date.now}

_UserGame.on 'init', (model) ->
    console.log 'UserGame collection init!'
# 静态方法
_UserGame.statics.findMethod = (condition, callback)->
    return @model('mongoose').find(condition,callback)

exports.UserGame = mongoose.model("UserGame", _UserGame)
