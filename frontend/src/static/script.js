const socket = io('http://localhost:3000')

const $ = document.querySelector.bind(document)

$('form')
  .addEventListener('submit', (event) => {
    socket.emit('chat message', $('#m').value)
    $('#m').value = ''

    event.preventDefault()
  })
