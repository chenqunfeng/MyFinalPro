express = require('express')
path = require('path')
fs = require('fs')
router = express.Router()

multipart = require('connect-multiparty')

router.get '/', (req, res, next) ->
    user = req.session.user
    res.render('index', { user: user })

router.post '/uploadImg', multipart(), (req, res) ->

    user = req.session.user
    userId = req.session.userId
    gameId = req.session.gameId

    file = req.files.file
    filename = file.originalFilename || path.basename(file.path)
    tPath = path.dirname(__filename) + '/../public/pro/' + gameId + '/'
    # 若Id目录不存在,则新建该目录
    if !fs.existsSync(tPath)
        fs.mkdirSync(tPath)
        
    fPath = tPath + filename
    # 将文件流存储在希望存储的位置
    fs.createReadStream(file.path).pipe(fs.createWriteStream(fPath))

    return res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/pro/' + gameId + '/' + filename}})

module.exports = router
