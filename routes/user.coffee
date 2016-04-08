express = require('express')

UserModel = require('./../model/user.coffee')
User = UserModel.User

router = express.Router()



router.post '/login', (req, res, next) ->

    username = req.body.username
    password = req.body.password

    User.findOne {username:username}, (err,docs) ->
        if null != docs
            _username = docs.username
            _password = docs.password
            _id = docs._id
            if _password == password
                req.session.user = _username
                req.session.userId = _id
                r = {status: "success", msg: "login success"}
            else
                r = {status: "failed", msg: "password is not correct"}
        else
            r = {status: "failed", msg: "username is not exist"}

        return res.json r
        
router.post '/register', (req, res, next) ->

    username = req.body.username
    password = req.body.password
    
    User.findOne {username:username}, (err,docs) ->
        if null != docs
            r = {status: "failed", msg: "username has exist"}
        else
            _user = new User({
                username: username
                password: password
                })
            _user.save()
            req.session.user = username
            r = {status: "success", msg: "register success"}

        return res.json r

router.get '/logout', (req,res) ->

    delete req.session.user

    res.redirect('/')

module.exports = router;
