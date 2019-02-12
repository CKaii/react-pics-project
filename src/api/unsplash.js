import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5996db8f24972d9a90e5d5768cd2b063f3441fa346ec56ebe39863606c2508e9'
  }
});
