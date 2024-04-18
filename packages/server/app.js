const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const config = require('./config');
const baseRouter = require('./router');
const app = express();

//建立连接, 需要时再打开
// mongoose.connect(config.db.url);
// mongoose.Promise = global.Promise;

const helmet = require('helmet');//防注入中间件

app.use(favicon(__dirname + '../../../favicon.ico'))

app.disable('x-powered-by');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'local';
}

if(Object.is(process.env.NODE_ENV,'local')){
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
}

app.use(helmet());
app.use(compress());
app.use(bodyParser.json(config.bodyParserJsonOptions));
app.use(bodyParser.urlencoded(config.bodyParserUrlencodedOptions));
app.use(cookieParser());
baseRouter.interceptorHttp(app);

app.use(express.static(path.join(__dirname, '../../public')));

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
