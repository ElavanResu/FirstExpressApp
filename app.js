var express = require('express')
var app = express()


// New feature 1 commit

///// SOME COMIT

/// New commit of featyre 1

// Create routes
app.get('/', function(req, res) {
  res.send('Hi there')
})

app.get('/bye', function(req, res) {
  res.send('Good Bye')
})

app.get('/dog', function(req, res) {
  res.send('Meow!!')
})

app.get('*', function(req, res) {
  res.send('You are a star')
})

// Tell express to listen for requests
app.listen('3000', '192.168.43.143', function() {
  console.log('Server has started on port: ', process.env.PORT)
})
