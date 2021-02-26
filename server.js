
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');



var app = express();

app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride('_method'));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burger_controller.js');
app.use('/', router);


var PORT = 3000;
app.listen(process.env.PORT || PORT);
console.log("Local host:" + PORT);