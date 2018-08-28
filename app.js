var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/about'));



var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
  });