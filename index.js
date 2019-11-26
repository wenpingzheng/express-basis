/**
 * 1. 安装body-parser npm install body-parser --save
 * 2. 引入require('body-parser');
 * 3. 初始化 app.use(bodyParser.urlencoded({ extended: false }))
 * 4. 获取值req.body
 */


var bodyParser = require('body-parser');
// var session      = require('express-session');
// var cookieParser = require('cookie-parser');

var http = require('http')
// var server = http.createServer(function(req, res) {
//   console.log('node')
//   res.write('node server')
//   res.end()
// })
// server.listen(3000)

var express = require('express')
var app = express()
http.createServer(app)

// 0. 内置中间件
app.use('/new', express.static(__dirname + '/public'))
// 模板的使用
app.set('view engine', 'pug')
// body-parser
app.use(bodyParser.urlencoded({ extended: false }))

// 自定义中间件
// 1. 应用级中间件 匹配所有路由
// app.use(function(req,res, next) {
//   console.log('dddd')
//   next()
// })

// app.use('/new', function(req,res, next) {
//   console.log('new'+new Date())
//   next()
// })

// 登录
app.get('/login', function (req, res) {
  res.render('login')
})
// 登录成功
app.post('/dologin', function (req, res) {
  console.log(req.body.name)
  res.render('dologin', { name: req.body.name })
})

// 路由传值
// 1. 动态传值
app.get('/news/:aid', function (req, res) {
  console.log(req.params.aid)
  res.render('news', { aid: req.params.aid })
})

// 2. get传值
// localhost:3000/product?aid=888
app.get('/product',function(req,res) {
  console.log(req.query.aid)
  res.render('news',{ aid: req.query.aid })
})

// 2. 路由级中间件
app.get('/new', function (req, res, next) {
  console.log('route' + new Date())
  next()
})

app.get('/new', function (req, res) {
  // console.log('express')
  res.send('express server')
  res.end()
})

// 3. 错误处理中间件
app.use(function (req, res) {
  res.status(404).send('页面出错！')
})

app.listen(3000)