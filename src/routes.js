const express = require("express");
const router = express.Router();
const _ = require("underscore");
const axios = require("axios");
const airports = require("./airports.json");

router.get("/flights", (req, res) => {
  console.log(req.query);
  axios
    .get("http://api.aviationstack.com/v1/flights", {
      params: {
        access_key: APIKEY,
        ...req.query,
      },
    })
    .then((result) => {
      res.status(200).json(result.data.data);
    });
});

router.get("/airports", (req, res) => {
  if (_.isEmpty(req.query)) {
    res.status(200).json(airports);
  } else {
    const result = req.query.iata.map((iata) => {
      return airports.find((airport) => airport.iata === iata.toUpperCase());
    });
    res.status(200).json(result);
  }
});

// routes
module.exports = router;

