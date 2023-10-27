const express = require('express');
const axios = require('axios')
require('dotenv').config()

const app = express();
const PORT = 8000;
const HOST = "192.168.68.112";


const userAgent = { 'UserAgent': 'GameSearchApp (GitHub)'}
const rawgApiKey = process.env.RAWG_KEY;


//GET GAME DETAILS BY ID 
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
    res.status(500).send('Error fetching game details by id.');
  });
})

//SEARCH BY NAME ENDPOINT FOR INPUT
app.get('/search/:name', (req, res) => {
  const gameName = req.params.name
  // console.log("TESTING SERVER PARAMS - FROM /Search/:name", gameName)

const options = {
  method: 'GET',
  url: 'https://api.rawg.io/api/games',
  params: {search: `${gameName}`, key: rawgApiKey},
  headers: {userAgent}
};

axios.request(options).then(function (response) {
  // console.log("TESTING RES FROM SERVER -  Search Endpoint", response.data);
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
  res.status(500).send('Error fetching search by name.');
});
})

// GET GAME SCREENSHOTS BY ID REQUEST
app.get('/screenshots/:id', (req, res) => {
  const { id } = req.params;
// console.log("TESTING SERVER PARAMS - FROM /screenshots/:id", id )
  const options = {
    method: 'GET',
    url: `https://api.rawg.io/api/games/${id}/screenshots`,
    params: {
      key: rawgApiKey,
    },
    headers: userAgent,
  };

  axios.request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Error fetching game screenshots.');
    });
});

//NEW GAMES ENDPOINT (Last 30 days by current date)
app.get('/new', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.rawg.io/api/games', 
    params: {
      key: rawgApiKey,
      ordering: '-added', // Sort by release date in descending order (newest first)
      dates: calculateDateRange(), // Calculate the date range for the last 30 days
    },
    headers: userAgent,
  };

  axios.request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Error fetching new games.');
    });
});
//Function that calulates the dates for data fetching
function calculateDateRange() {
  const currentDate = new Date();
  const last30Days = new Date();
  last30Days.setDate(currentDate.getDate() - 30);

  // Format the date range as 'YYYY-MM-DD,YYYY-MM-DD'
  return `${last30Days.toISOString().split('T')[0]},${currentDate.toISOString().split('T')[0]}`;
}


//POPULAR GAMES ENDPOINT
app.get('/popular', (req, res) => {
  const { page, page_size } = req.query;
  
  const options = {
    method: 'GET',
    url: 'https://api.rawg.io/api/games',
    params: {
      key: rawgApiKey,
      page,
      page_size,
    },
    headers: userAgent,
  };
  
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Error fetching popular games.');
    });
});

app.get('/platform-games/:id', async (req, res) => {
  const platformSearch = req.params.id; // Use req.params.id to match the parameter name
  console.log(platformSearch);

  const options = {
    method: 'GET',
    url: 'https://api.rawg.io/api/platforms',
    params: {
      key: rawgApiKey,
      ordering: '-rating',
      page_size: 20,
      platforms: platformSearch, // Use the platformSearch to specify the platform parameter
    },
    headers: userAgent,
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error fetching platform games.');
    });
});


  // Start the Express server - Npm run dev
  app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}`);
  });
