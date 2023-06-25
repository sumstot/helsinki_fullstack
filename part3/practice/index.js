const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can only execute JS',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most import methods of HTTP protocol',
    important: true
  }
]

app.get('/',(request, response) => {
  response.send('<h1>Hello World from Express</h1')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  }
  else {
    response.status(404).end()
  }
})

app.delete('api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.filter(note => note.id !== id)

  response.status(204).end()

})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
