const CountryApi = require("./classes/countries.js");

const axios = require("axios");
const express = require("express");
const app = express();
const country = new CountryApi();

app.get("/fetch-countries", async (req, res) => {
  const country = new CountryApi();
  const result = await country.fetchAll();
  const data = result.data;
  res.send(data);
});

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use(express.static("public"));

app.get("/fetch-countries/:region", async (req, res) => {
  const country = new CountryApi();
  const result = await country.fetchRegion(req.params.region);

  res.send(result);
});
