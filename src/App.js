import {useState, useEffect} from 'react';
import { Tweet }  from './components/tweet/';
import { Box } from '@mui/material';
import { Layout } from './components/layout';
import io from 'socket.io-client'
import './App.css';

const App = () =>{
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    
    const socket = io('http://localhost:3001/')
    
    socket.on('connect', () => {
      socket.on('newTweet', (tweet) => {
        setTweets((prevTweets) => [...prevTweets, tweet])
      })
    })
    
    socket.on('disconnect', () => {
      socket.off('newTweet')
      socket.removeAllListeners('newTweet')
    })
  },[])
  
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