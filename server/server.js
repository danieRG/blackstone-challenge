const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const Twit = require('twit')
require('dotenv').config()

let app = express()
let server = http.createServer(app)
let io = socketIO(server)

app.use(express.json())

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

let twitterStream
let terms = 'js'

const startStream = () => {
  if (twitterStream == null) {
    console.log('Now streaming.')
    twitterStream = T.stream('statuses/filter', { track: 'js' })
    twitterStream.on('tweet', function (tweet) {
      io.emit('newTweet', tweet)
    })
  } else {
    console.log('Stream already exists.')
  }
  io.emit('searchWord', terms)
}

const stopStream = () => {
  console.log('Stopping stream.')
  twitterStream.stop()
  twitterStream = null
}

app.post('/updateTerms', (req, res) => {
  terms = req.body.terms
  res.status(200).send({ searchWord: terms })
  stopStream()
  startStream()
})

io.on('connection', (socket) => {
  console.log('Client connected.')
  startStream()
  socket.on('disconnect', () => {
    if (Object.keys(io.sockets.sockets).length === 0) {
      stopStream()
    }
    console.log('Client disconnected.')
  })
})

module.exports.server = server.listen(3001, () => {
  console.log('Server listening on port 3001')
})
module.exports.app = app