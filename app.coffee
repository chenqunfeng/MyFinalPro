express = require('express')
bodyParser = require('body-parser')
path = require('path')

mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

session = require('express-session')
mongoStore = require('connect-mongo')(session)

app = express()
# monkey = require('./bussiness/monkey')
index = require('./routes/index')
game = require('./routes/game')
user = require('./routes/user')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true }));     

# 分析
app.use(session({
    ###
        @param {string}  secret            用于给session ID cookie做签名
        @param {object}  cookie            {maxAge}表示存储时间 60 * 1000 表示一分钟
        @param {object}  store             session存储的地方,这里存储在mongodb中{默认存储在内存中}
        @param {boolean} resave            强制让session保存到store的地方即使改session没有修改
                                           {默认为true}
        @param {boolean} saveUninitialized 强制让那些未初始化的session保存到store的地方,
                                           未初始化的意思就是新建了但是还未进行修改
                                           {默认为true}
        ###
    secret: "Chouzhu0314",
    cookie: {maxAge: 15 * 24 * 60 * 60 * 1000},
    store: new mongoStore({
        url: "mongodb://localhost:27017/test"
        }),
    resave: true,
    saveUninitialized: true
    }))

app.use('/', index)
app.use('/game', game)
app.use('/user', user)

app.use(express.static(path.join(__dirname, 'public')))

# //# improve
# //这是一个十分逗逼的做法
app.use(express.static(path.join(__dirname, 'public/game/magician/')))
app.use(express.static(path.join(__dirname, 'public/game/bird/')))




app.get '*', (req, res) ->
    res.render('404', {title: 'No Found'})
module.exports = app