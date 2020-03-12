require('dotenv').config()

const express = require('express')
const path = require('path')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build', '/portfolio', '/contact')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});