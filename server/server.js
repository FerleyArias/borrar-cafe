const express = require('express')
const app = express()
require('./config/config')

app.use(express.urlencoded({
  extended:false
}))

app.get('/usuario', function (req, res) {
  res.json('get todos los usuarios')
})

app.get('/usuario/:id', function (req, res) {
  let id=req.params.id
  res.json(`get usuario con id ${id}`)
})

app.post('/usuario', (req, res) => {
  let body = req.body
  if(!body.name) {
    res.status(400).json({
      ok:false,
      message: 'El nombre es nescesario'
    })
  }
  res.json({persona:body})
})

app.put('/usuario/:id', (req, res) => {
  let id=req.params.id
  res.json(`put Usuario ${id}`)
})

app.delete('/usuario', (req, res) => {
  res.json('delete Usuario')
})

app.listen(process.env.PORT, ()=> {
  console.log('Servidor escuchando en el puerto 3000');
})