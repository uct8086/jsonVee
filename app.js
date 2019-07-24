var express = require('express');
var path = require('path');
var app = express();
var logger = require("./src/common/utils/log_utils")("static_app");
var compression = require('compression');

/* if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'local';
}

if(Object.is(process.env.NODE_ENV,'local')){
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/dist/');
} */

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(compression());

app.use('/',express.static(path.join(__dirname, './dist/')));



app.set('host', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 8778);
var server = app.listen(app.get('port'), app.get('host'), function () {
    logger.info('lab server listening on port', server.address().port);
});