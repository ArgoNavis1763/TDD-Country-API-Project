const axios = require("axios");

module.exports = class CountryApi {
  constructor() {
    this.url = "https://restcountries.com/v2";
  }
  async fetchAll() {
    try {
      const result = await axios.get(`${this.url}/all`);
      console.log(result);
    } catch (error) {
      return [];
    }
  }

  async fetchCountries(name) {
    try {
      const result = await axios.get(`${this.url}/name/${name}`);
      return result;
    } catch (error) {
      return [];
    }
  }

  async allCountriesFormatted() {
    try {
      const result = await axios.get(
        `${this.url}/all?fields=name,population,region,flag,capital`
      );
      return result;
    } catch (error) {
      return [];
    }
  }

  async fetchCurrency(currency) {
    try {
      const result = await axios.get(
        `${this.url}/currency/${currency}?fields=name,population,region,flag,capital`
      );
      console.log(result);
      return result;
    } catch (error) {
      return [];
    }
  }
};
