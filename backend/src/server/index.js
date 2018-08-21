const { createServer } = require('http')
const express = require('express')
const socketIo = require('socket.io')

const app = express()

const server = createServer(app)

const io = socketIo(server)

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('chat message', message => {
    io.emit('chat message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(3000)
