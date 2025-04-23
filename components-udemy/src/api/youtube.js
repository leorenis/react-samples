import axios from 'axios'
const KEY = 'AIzaSyA1tNw7CEzaZAxksuUf8zfulucrpJEaq8U'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
