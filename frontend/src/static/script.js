const socket = io('http://localhost:3000')

const $ = document.querySelector.bind(document)

$('form')
  .addEventListener('submit', (event) => {
    socket.emit('chat message', $('#m').value)
    $('#m').value = ''

    event.preventDefault()
  })

socket.on('chat message', message => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(message))
  $('#messages').appendChild(li)
})
