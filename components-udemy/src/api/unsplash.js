import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 69dab8414d4bf0cb68eeef01a693523471716a0074eff9e8198a3eeac4b4a5c2'
  }
})
