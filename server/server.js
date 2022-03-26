const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
let Twit = require('twit')
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
let searchWord = 'js'

const startTwitterStream = () => {
  if (twitterStream == null) {
    console.log('Now streaming.')
    twitterStream = T.stream('statuses/filter', { track: 'js' })
    twitterStream.on('tweet', function (tweet) {
      io.emit('newTweet', tweet)
    })
  } else {
    console.log('Stream already exists.')
  }
  io.emit('searchWord', searchWord)
}

const stopTwitterStream = () => {
  console.log('Stopping Twitter stream.')
  twitterStream.stop()
  twitterStream = null
}

app.post('/updateTerm', (req, res) => {
  searchWord = req.body.searchWord
  res.status(200).send({ searchWord: searchWord })
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

setTimeout(() => {
    console.log('online')
},1000)
module.exports.server = server.listen(3001, () => {
  console.log('Server is up on port 3001')
})
module.exports.app = app