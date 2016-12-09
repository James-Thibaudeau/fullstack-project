var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.IP, '27017');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users', require('./server/controllers/UserController'));
app.use('/api/appointments', require('./server/controllers/AppointmentController'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT, process.env.IP, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at: ' + process.env.IP + ':' + process.env.PORT);
});

