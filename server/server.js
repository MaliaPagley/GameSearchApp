const axios = require("axios");
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 8000;
const HOST = "192.168.68.111";

// Set user agent for requests
const userAgent = { UserAgent: "GameSearchApp" };
const rawgApiKey = process.env.RAWG_KEY;
const youtubeApiKey = process.env.YOUTUBE_KEY;

// Get game details by ID
app.get("/game-details/:id", (req, res) => {
  const gameId = req.params.id;
  const options = {
    method: "GET",
    url: `https://rawg.io/api/games/${gameId}`,
    params: { key: rawgApiKey },
    headers: userAgent,
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching game details by id.");
    });
});

// Search by name endpoint for input
app.get("/search/:name", (req, res) => {
  const gameName = req.params.name;
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { search: `${gameName}`, key: rawgApiKey },
    headers: { userAgent },
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching search by name.");
    });
});

// Get game screenshots by ID request
app.get("/screenshots/:id", (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: `https://api.rawg.io/api/games/${id}/screenshots`,
    params: { key: rawgApiKey },
    headers: userAgent,
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching game screenshots.");
    });
});

// Get game trailer preview from YouTube by name
app.get("/youtube-search/:name", (req, res) => {
  const gameName = req.params.name;
  const options = {
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      q: gameName + " Game Trailer",
      key: youtubeApiKey,
      part: "snippet",
      type: "video",
      maxResults: "1",
    },
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching trailer from youtube.");
    });
});

// New games endpoint
app.get("/new", (req, res) => {
  const { page, page_size } = req.query;
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: rawgApiKey,
      ordering: "-added",
      dates: calculateDateRange(),
      page,
      page_size,
    },
    headers: userAgent,
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching new games.");
    });
});

// Get popular games
app.get("/popular", (req, res) => {
  const { page, page_size } = req.query;
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { key: rawgApiKey, page, page_size },
    headers: userAgent,
  };

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching popular games.");
    });
});

// Start the Express server - Npm run dev
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${HOST}:${PORT}`);
});

// Function that calculates the dates for data fetching
function calculateDateRange() {
  const currentDate = new Date();
  const Days = new Date();
  Days.setDate(currentDate.getDate() - 180);
  return `${Days.toISOString().split("T")[0]},${
    currentDate.toISOString().split("T")[0]
  }`;
}
