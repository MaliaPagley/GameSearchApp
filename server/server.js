const express = require('express');
const axios = require('axios')
require('dotenv').config()

const app = express();
const PORT = 8000;
const HOST = "localhost";

const API_BASE_URL = process.env.RAWG_BASE_URL;
const API_KEY_VALUE = process.env.RAWG_KEY;

app.get('/', (req, res) => {
  console.log(req.query.params)
  const options = {
    method: 'GET',
    url: 'https://rawg.io/api/games',
    params: {key: API_KEY_VALUE, 'page': '1', page_size: '1'},
    headers: {'User-Agent': 'insomnia/8.1.0'}
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data)
    console.log(response.data)
  }).catch(function (error) {
    console.error(error);
  });
})
// POPULAR ROUTE 
app.get('/popular', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://rawg.io/api/games',
    params: {key: API_KEY_VALUE, 'popular?page': '1', page_size: '5'},
    headers: {'User-Agent': 'insomnia/8.1.0'}
  };

  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
})
  
  // Start the Express server - Npm run dev
  app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}`);
  });
