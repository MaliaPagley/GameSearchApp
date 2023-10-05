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







// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 3000;

// //Load environment variables from .env file
// require('dotenv').config();


// app.use(express.json());


// //Define a route to obtain the access token from IDGB (Twtich API)
// app.post('/', async (req, res) => {
  
//     try {
//         // Retrieve Twitch and IGDB client credentials from environment variables
//         const clientId = "ggjzuz9ab5gh2tzzv1m3p7ep2ub785";
//         const clientSecret = "qe6bo8tf66g3nx9lyre7ti6abfxhwg";

//         // Twitch OAuth2 token endpoint
//         const tokenEndpoint = 'https://id.twitch.tv/oauth2/token';

//         const params = {
//             client_id: clientId,
//             client_secret: clientSecret,
//             grant_type: 'client_credentials',
//         };

//          // Make a POST request to the Twitch OAuth2 token endpoint
//          const response = await axios.post(tokenEndpoint, null, {
//             params,
//          });

//           // Extract the access token from the response
//           const accessToken = response.data.access_token;

//           const igdbApiUrl = 'https://api.igdb.com/v4/games';
//           const igdbHeaders = {
//                 'Client-ID': process.env.ClIENT_APP_ID,
//                 Authorization: `Bearer ${accessToken}`,
//           };
//            const igdbReponse = await axios.post(
//             igdbApiUrl,
//             'fields name; limit 10;',
//             {
//                 headers: igdbHeaders,
//             }
//            );
//              // Log out the IGDB API response
//            console.log('IGDB API Response', igdbReponse.data);

//            res.json(igdbReponse.data);
//     } catch (error) {
//         console.error('Error:', error.message);
//         res.status(500).json({ error: 'Internal Server Error'});
//     }

// });

// app.listen(port, () => {
//     console.log(`Server is now running on port ${port}`);
// });