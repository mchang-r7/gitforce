const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to the app.js project!'
      + '<button onclick="alert(\'hello\')">Click Me</button>')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})