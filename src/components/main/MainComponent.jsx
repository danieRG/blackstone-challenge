import { useState, useEffect } from 'react';
import io from 'socket.io-client'
import { Box } from '@mui/material';
import { Layout } from '../layout';
import { Tweet } from '../tweet';


export const MainComponent = () => {
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
    }, [])
    let tweetsList = tweets.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />
    });

    tweetsList.reverse();
    return (
        <div>
            <Layout>
                <Box sx={{
                    gap: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {
                        tweetsList
                    }
                </Box>
            </Layout>
        </div>
    )
}
