const express = require('express');
const axios = require('axios')
require('dotenv').config()

const app = express();
const PORT = 8000;
const HOST = '192.168.68.116';


const userAgent = { 'UserAgent': ''}
const rawgApiKey = process.env.RAWG_KEY_TESTER;
const youtubeApiKey = process.env.YOUTUBE_KEY;


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

app.get('/youtube-search/:name', async (req, res) => {
  try {
    const gameName = req.params.name;
    console.log(gameName)

    const youtubeOptions = {
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: gameName + ' Trailer', // You can adjust the query as needed
        key: youtubeApiKey,
        part: 'snippet',
        type: 'video',
        maxResults: '1'
      },
    };

    const youtubeResponse = await axios.request(youtubeOptions);

    res.json(youtubeResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error searching YouTube for videos.');
  }
});

//NEW GAMES ENDPOINT
app.get('/new', (req, res) => {
  const { page, page_size } = req.query;
  console.log("/new: ", req.query)
  const options = {
    method: 'GET',
    url: 'https://api.rawg.io/api/games', 
    params: {
      key: rawgApiKey,
      ordering: '-added', // Sort by release date in descending order (newest first)
      dates: calculateDateRange(), // Calculate the date range 
      page: page, page_size: page_size 
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
  const Days = new Date(); 
  Days.setDate(currentDate.getDate() - 180); // Set to last -180 days from current date

  // Format the date range as 'YYYY-MM-DD,YYYY-MM-DD'
  return `${Days.toISOString().split('T')[0]},${currentDate.toISOString().split('T')[0]}`;
}

// GET POPULAR GAMES 
app.get('/popular', (req, res) => {
  const { page, page_size } = req.query; // Get page and page_size from query parameters
  console.log("/popular: ", req.query)
  const options = {
    method: 'GET',
    url: 'https://api.rawg.io/api/games',
    params: {key: rawgApiKey, 
         page: page, page_size: page_size},
    headers: userAgent,
  };

  axios.request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Error fetching popular games.');
    });
});


  // Start the Express server - Npm run dev
  app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}`);
  });
