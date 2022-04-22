const axios = require("axios");

module.exports = class CountryApi {
  constructor() {
    this.url = "https://restcountries.com/v2";
  }
  async fetchAll() {
    try {
      const result = await axios.get(`${this.url}/all`);

      return result;
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

      return result;
    } catch (error) {
      return [];
    }
  }

  async fetchRegionalBloc(regionalBloc) {
    try {
      const result = await axios.get(
        `${this.url}/regionalbloc/${regionalBloc}?fields=name,population,region,flag,capital`
      );
      return result;
    } catch (error) {
      return [];
    }
  }

  async fetchLanguage(language) {
    try {
      const result = await axios.get(
        `${this.url}/lang/${language}?fields=name,population,region,flag,capital`
      );

      return result;
    } catch (error) {
      return [];
    }
  }

  async fetchRegion(region) {
    try {
      const result = await axios.get(
        `${this.url}/all?fields=name,population,region,flag,capital`
      );

      const allResult = result.data;

      const regionResult = allResult.filter(
        (country) => country.region === region
      );

      return regionResult;
    } catch (error) {
      return [];
    }
  }
};
