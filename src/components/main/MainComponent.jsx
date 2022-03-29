import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Layout } from '../layout';
import { Tweet } from '../tweet';
import { socket } from '../../utils/socketIO';
import { useDispatch, useSelector } from 'react-redux';
import { addTweetsAction } from '../../actions/tweets';


export const MainComponent = () => {
    const dispatch = useDispatch();
    const { tweets } = useSelector(state => state.tweets)
    const { loggedIn } = useSelector(state => state.auth)

    useEffect(() => {
        socket.on('connect', () => {
            socket.on('newTweet', (tweet) => {
                dispatch(addTweetsAction(tweet))
            })
        })

        socket.on('disconnect', () => {
            socket.off('newTweet')
            socket.removeAllListeners('newTweet')
        });

    }, [loggedIn, dispatch])
    console.log(socket)
    let tweetsList = tweets.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />
    });

    tweetsList.reverse();

    return (
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
    )
}
