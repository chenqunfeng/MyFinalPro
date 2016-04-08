express = require('express')
rf = require('fs')
router = express.Router()

# 这里区分成两张collection是为了避免当用户游戏累积的时候,造成原型游戏查找时间成本增加
# 原型游戏
GameModel = require('./../model/game.coffee')
Game = GameModel.Game
# 用户游戏
UserGameModel = require('./../model/userGame.coffee')
UserGame = UserGameModel.UserGame

router.get '/', (req, res, next) ->
    user = req.session.user
    if user
        res.render('game', { user: user })
    else
        res.redirect('/')

router.get '/list', (req, res, next) ->
    Game.find {}, (err,docs) ->
        r = {status: "success", list: docs}
        return res.json r

router.get '/getGameConfig', (req, res, next) ->
    id = req.session.gameId
    UserGame.findOne {_id: id}, (err,docs) ->
        if docs
            d = docs.data
            r = d.defaultConfig
            u = d.userConfig
            r_items = r.items
            u_items = u.items
            u_items.map (unit,index) =>
                r_items.map (_unit,_index) =>
                    if unit.key_name is _unit.key_name
                        _unit.key_value = unit.key_value
            r = {status: "success", data: r}
        else
            r = {status: "failed"}
        return res.json r

router.post '/setGameId', (req, res, next) ->
    id = req.body.gameId
    if id
        req.session.gameId = id
        r = {status: "success"}
    else
        r = {status: "failed"}
    return res.json r

router.get '/editor', (req, res, next) ->
    user = req.session.user
    userId = req.session.userId
    if user
        ### 在这个路由中,用户一进来,就要创建一个用户创建的游戏的纪录,不管用户是否进行过编辑
            思路过程:
                查找当前游戏模版纪录(Game.findOne()),并抽取出游戏的配置信息 ->
                    创建一条新的UserGame纪录
            ###
        gameId = req.session.gameId

        UserGame.findOne {_id:gameId}, (err,docs) ->
            if null != docs
                res.render('gameEditor', { user: user, status: "create"})
            else
                Game.findOne {_id:gameId}, (err,docs) ->
                    if null != docs
                        defaultConfig = docs.data.defaultConfig
                        _userGame = new UserGame({
                            data: {
                                defaultConfig: defaultConfig
                            }
                            userId:userId
                            status: "OFFLINE"
                        })
                        _userGame.save()
                        delete req.session.gameId
                        req.session.gameId = _userGame._id
                        res.render('gameEditor', { user: user, status: "create"})
    else
        res.redirect('/')

router.get '/gameCenter', (req,res,next) ->
    user = req.session.user
    userId = req.session.userId
    if user
        UserGame.find {userId:userId}, (err,docs) ->
            r = {status: docs}
            return res.json r

    else
        res.redirect('/')

router.post '/saveConfig', (req,res,next) ->
    gameId = req.session.gameId
    userConfig = req.body.userConfig
    UserGame.findOne {_id:gameId}, (err,docs) ->
        items = docs.data.userConfig.items
        l = items.length
        # 更新userConfig中的数据
        for k of userConfig
            v = userConfig[k]
            obj = {key_name:k,key_value:v}
            if l
                flag = true
                items.map (unit,index) =>
                    if k is unit.key_name
                        flag = false
                        unit.key_value = v
                        return

                flag and items.push(obj)
            else
                items.push(obj)
        docs.save()
        r = {status: "success", config:docs}
        return res.json r

router.post '/gameStatus', (req,res,next) ->
    gameId = req.session.gameId
    status = req.body
    if gameId
        UserGame.findOne {_id:gameId}, (err,docs) ->
            docs.status = "ONLINE"
            docs.save()
            r = {status: "success", msg:"success"}
            return res.json r
    else
        return res.json {status:"error",msg:"gameId is null"}

router.get '/addGame', (req, res, next) ->
    user = req.session.user
    paths = [
        "public/game/bird/mainfest.json",
        "public/game/magician/mainfest.json",
    ]
    if user
        paths.map (path,index) ->

            data = rf.readFileSync(path,"utf-8")

            items =  JSON.parse(data).items
            temp = path.split("/")
            _link = "/" + temp[1] + "/" + temp[2]

            _game = new Game({
                    data: {

                        defaultConfig:{
                            items: items
                            link: _link
                        }
                    }
                    })
            _game.save()
        r = {status: "success", msg: "register success"}
        return res.json r
    else
        res.redirect('/')

router.get '/dropGame', (req, res, next) ->
    user = req.session.user
    if user
        Game.find {}, (err,docs) ->
            docs.map (item,index) ->
                id = item._id
                Game.remove {_id:id}, (err) ->
                    console.log "remove game success!"
            
        r = {status: "success", msg: "register success"}
        return res.json r
    else
        res.redirect('/')



module.exports = router
