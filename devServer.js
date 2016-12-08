var path = require('path');
var express = require('express');
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

app.use('/api/users', require('./controllers/UserController'));
app.use('/api/appointments', require('./controllers/AppointmentController'));

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

