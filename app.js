const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const config = require('./server/config');
const baseRouter = require('./server/router');
const app = express();

// //建立连接
mongoose.connect(config.db.url);
mongoose.Promise = global.Promise;

// const middlewares = require('./server/middleware');
const helmet = require('helmet');//防注入中间件
// const session = require('express-session');
// let DCacheUtil = null;
// let DCacheSessionStore = null;

app.use(favicon(__dirname + '/client/assets/image/favicon.ico'))


app.disable('x-powered-by');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'local';
}
console.log("Node 的版本是？" + process.env.NODE_ENV);

if(Object.is(process.env.NODE_ENV,'local')){
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
    // app.set('views', __dirname + '/server/mock/views');
}

app.use(helmet());
app.use(compress());
app.use(bodyParser.json(config.bodyParserJsonOptions));
app.use(bodyParser.urlencoded(config.bodyParserUrlencodedOptions));
app.use(cookieParser());
baseRouter.interceptorHttp(app);
//在进入首页或详情页时session check
app.use(async function (req, res, next) {
    console.log('goto web page' + req.path);
    // TODO
    next();
});


app.use(express.static(path.join(__dirname, './dist')));



// app.use(session({
//     secret: 'foo',
//     cookie: { secure: false, maxAge: 1000 * 60 * 60 * 8 },
//     //cookie: {secure: false, maxAge: 1000 * 60 },
//     resave: false,//是否允许session重新设置，要保证session有操作的时候必须设置这个属性为true
//     rolling: true,//是否按照原设定的maxAge值重设session同步到cookie中，要保证session有操作的时候必须设置这个属性为true
//     saveUninitialized: true,//是否设置session在存储容器中可以给修改
//     store: DCacheSessionStore ? new DCacheSessionStore({
//         client: DCacheUtil
//     }) : undefined
//     //unset:'keep'//设置req.session在什么时候可以设置;destory:请求结束时候session摧毁;keep:session在存储中的值不变，在请求之间的修改将会忽略，而不保存
// }));

// app.use(middlewares());



app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(`path : ${req.path}`, err);

    res.json({
        code: -1001,
        msg: err.message
    });

});
app.set('host', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 8050);
const server = app.listen(app.get('port'), app.get('host'), function () {
    console.log('server listening on port', server.address().port);
});
