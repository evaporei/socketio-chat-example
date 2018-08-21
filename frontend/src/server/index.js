const express = require('express')
const path = require('path')

const app = express()

const indexFilePath = path.resolve(`${__dirname}/../static/index.html`)

app.get('/', (req, res) => res.sendFile(indexFilePath))

app.listen(8080)
