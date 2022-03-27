const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const Twit = require('twit')
const cors = require('cors')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.json())

app.use(cors({
  origin: '*',
}))

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

let twitterStream
let searchTerm = 'oppo'

const startTwitterStream = () => {
  if (twitterStream == null) {
    console.log('Streaming now.')
    twitterStream = T.stream('statuses/filter', { track: searchTerm })
    twitterStream.on('tweet', function (tweet) {
      io.emit('newTweet', tweet)
    })
  } else {
    console.log('Stream already exists.')
  }
  io.emit('searchTerm', searchTerm)
}

const stopTwitterStream = () => {
  console.log('Stopping stream.')
  twitterStream.stop()
  twitterStream = null
}

app.use('/api', require('./routes/index'))

app.post('/updateSearchTerm', (req, res) => {
  searchTerm = req.body.searchTerm.join(',  ')

  res.status(200).send({ searchTerm: searchTerm })
  stopTwitterStream()
  startTwitterStream()
})

io.on('connection', (socket) => {
  console.log('Client connected.')
  startTwitterStream()
  socket.on('disconnect', () => {
    if (Object.keys(io.sockets.sockets).length === 0) {
      stopTwitterStream()
    }
    console.log('Client disconnected.')
  })
})

module.exports.server = server.listen(3001, () => {
  console.log('Server listening on port 3001')
})
module.exports.app = app