const CountryApi = require("./classes/countries.js");
const axios = require("axios");
const express = require("express");
const app = express();
const country = new CountryApi();

app.get("/fetch-countries", async (req, res) => {
  //   console.log("This is your request", req);
  const country = new CountryApi();
  const result = await country.fetchAll();
  const data = result.data;
  console.log(data);
  res.send(data);
});

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use(express.static("public"));
