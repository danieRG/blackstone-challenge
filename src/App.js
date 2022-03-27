import {useState, useEffect} from 'react';
import { Tweet }  from './components/tweet/';
import './App.css';
import { Box } from '@mui/material';
import { Layout } from './components/layout';
import io from 'socket.io-client'
import axios from 'axios'
import { initSocket } from './utils/socketIO';

const App = () =>{
  const [tweets, setTweets] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    
    const socket = io('http://localhost:3001/')
    
    socket.on('connection', () => {
      socket.on('newTweet', (tweet) => {
        setTweets((prevTweets) => [...prevTweets, tweet])
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

  const updateSearchTerm = () => {
    axios.post('/updateSearchTerm', {
      searchTerm: "tesla"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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