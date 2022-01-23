const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// listeners have to be set up BEFORE the event can be emitted

customEmitter.on('response', (name, id) => {
  console.log(`data received from user ${name} with id: ${id}`)
})

// first argument is the name of the event, following args are params that are passed into the listener callback
customEmitter.emit('response', 'shawn', 145)