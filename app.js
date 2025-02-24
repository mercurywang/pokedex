const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5001')
})

app.get('/version', (req, res) => {
  res.send('11:00')
})

app.get('/health', (req, res) => {
  res.send('ok')
})
