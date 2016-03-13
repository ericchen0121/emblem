var express = require('express')
var request = require('request')
var Grant = require('grant-express')
var sass = require('node-sass')

app = express()

// GRANT
grant = new Grant(require('./config.json'))
app.use(grant)

// PUREST / REQUEST
var Purest = require('purest')
  , eventbrite = new Purest({ provider: 'eventbrite' })

// CONFIG

var config = require('./config.json')
var conf = config[process.env.NODE_ENV||'development']
// NODE_ENV=production node app.js
var grant = new Grant(conf)

// bodyParser = require('body-parser'),
// oauthserver = require('oauth2-server');


var accessToken = 'ME5QL7LGZOVBBR4Z63VJ'
request({
	url: 'https://www.eventbrite.com/oauth/authorize', 
	method: 'POST', 
	auth: {
		'bearer': accessToken
	},
}, function(err, res) {
	console.log(res.body)
})


// ROUTES
var jade = require('jade');
var app = express();
 
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index', 
  { author: 'Eric Chen',
    stylesheet: 'index'
  }
  )
});

app.get('/speakers', function (req, res) {
  res.render('speakers', 
  { author: 'Eric Chen' }
  )
});

app.get('/about', function (req, res) {
  res.render('about', 
  { author: 'Eric Chen' }
  )
});

app.get('/contact', function (req, res) {
  res.render('contact', 
  { author: 'Eric Chen' }
  )
});

app.get('/events', function (req, res) {
  res.render('events', 
  { author: 'Eric Chen' }
  )
});

app.get('/signup', function (req, res) {
  res.render('signup', 
  { author: 'Eric Chen' }
  )
});

app.get('/apply', function (req, res) {
  res.render('apply', 
  { author: 'Eric Chen', 
    stylesheet: 'apply'}
  )
});

// START
app.listen(3000, function(){
  console.log('Express server listening on port ' + 3000)
})