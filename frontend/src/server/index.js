const express = require('express')
const path = require('path')

const app = express()

const staticFolderPath = path.resolve(`${__dirname}/../static`)

app.use(express.static(indexFilePath))

app.listen(8080)
