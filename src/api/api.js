import axios from 'axios'

const tweetsApi = axios.create({
    baseURL: 'http://localhost:3001'
})


export default tweetsApi