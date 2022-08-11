const bodyParser = require('body-parser')
const http = require('http')
const path = require('path')
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()

const db = new sqlite3.Database(':memory:')
db.serialize(function () {
  db.run("CREATE TABLE user (username TEXT, password TEXT, title TEXT)")
  db.run("INSERT INTO user VALUES ('privilegedUser', 'privilegedUser1', 'Administrator')")
})

app.get('/', (req, res) =>
    res.sendFile('index.html')
)

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
