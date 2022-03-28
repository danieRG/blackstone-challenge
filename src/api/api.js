import axios from 'axios'

const tweetsApi = axios.create({
    //baseURL: 'http://localhost:3001'
    baseURL: 'https://stream-tweet-api.herokuapp.com'
})


export default tweetsApi