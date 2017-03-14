var express = require('express');
// this will invoke express and place the results of invoking in variable app
var app = express();
var path = require('path');
var bodyPar = require('body-parser');

// define for the app to use these components
app.use(bodyPar.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

//set app to use proper locations for ejs
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('listening on 8000');
})
