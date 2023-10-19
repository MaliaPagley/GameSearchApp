const express = require('express');
const axios = require('axios')
require('dotenv').config()


const app = express();
const PORT = 8000;
const HOST = "localhost";


const userAgent = { 'UserAgent': 'GameSearchApp (GitHub)'}
const rawgApiKey = process.env.RAWG_KEY;


// const optionsPopular = {
//   method: 'GET',
//   headers: userAgent,
//   url: 'https://api.rawg.io/api/games/lists/main',
//   qs: {
//     key: rawgApiKey,
//     ordering: '-relevance',
//     discover: true,
//     page_size: 10
//   }
// };
app.get('/game-details/:id', (req, res) => {
  const gameId = req.params.id
  const options = {
    method: 'GET',
    url: `https://rawg.io/api/games/${gameId}`,
    params: {key: rawgApiKey},
    headers: userAgent
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data)
    
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/search/:name', (req, res) => {
  const gameName = req.params.name
  console.log(gameName)

const options = {
  method: 'GET',
  url: 'https://api.rawg.io/api/games',
  params: {search: `${gameName}`, key: rawgApiKey},
  headers: {userAgent}
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
});
  // console.log(gameName)
  // const options = {
  //   method: 'GET',
  //   url: `https://rawg.io/api/games/${gameName}`,
  //   params: {key: rawgApiKey},
  //   headers: userAgent
  // };
  
  // axios.request(options).then(function (response) {
  //   res.json(response.data)
  //   console.log(response.data)
    
  // }).catch(function (error) {
  //   console.error(error);
  // });
})

app.get('/new', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://rawg.io/api/games',
    params: {key: rawgApiKey, 
      ordering: 'last-30-days',
      discover: 'true',
      },
    headers: userAgent
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data)
    
  }).catch(function (error) {
    console.error(error);
  });
})


app.get('/popular', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://rawg.io/api/games/lists/popular',
    params: {key: rawgApiKey},
    headers: userAgent
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data)
    
  }).catch(function (error) {
    console.error(error);
  });
})

  // Start the Express server - Npm run dev
  app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}`);
  });
