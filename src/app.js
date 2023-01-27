const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

// Database connectivity
require("./db/connect")

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.send('Main Server Connected.......')
})

// app.get('/index',(req,res) => {
//     res.send(path.join())
// })

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`)
})