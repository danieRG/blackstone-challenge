import {useState, useEffect} from 'react';
import { Tweet }  from './components/tweet/';
import './App.css';
import { Box } from '@mui/material';
import { Layout } from './components/layout';
import socketIOClient from 'socket.io-client'
import axios from 'axios'

function App() {
  const [tweets, setTweets] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
        const socket = socketIOClient('http://localhost:3000/')

    socket.on('connect', () => {
      socket.on('newTweet', (tweet) => {
        setTweets(tweet)
      })
      socket.on('searchTerm', (term) => {
        setTerm({term})
      })
    })
    socket.on('disconnect', () => {
      socket.off('newTweet')
      socket.removeAllListeners('newTweet')
    })
  },[])

  let tweetsAsc = tweets.reverse();
  console.log(tweets)
  return (
    <div className="App">
      <Layout>
        <Box sx={{
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
          {
            tweets.map((tweet, index) => {
              return <Tweet key={index} tweet={tweet} />
            })
          }
        </Box>

      </Layout>
    </div>
  );
}

export default App;
