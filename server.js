const CountryApi = require("./classes/countries.js");

const country = new CountryApi();

country.fetchRegion("Europe");
