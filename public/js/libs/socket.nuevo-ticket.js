// Comando para establecer la conexión

const socket = io()

const label = $('#lblNuevoTicket')

socket.on('connect', () => console.log('Conectado'))
socket.on('disconnect', () => console.log('Desconectado'))
socket.on('estadoActual', ({ actual }) => {
  label.text(actual)
})

$('button').on('click', () => {
  socket.emit('siguienteTicket', null, siguienteTicket => {
    label.text(siguienteTicket)
  })
})
