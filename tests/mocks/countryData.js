const allCountryData = [
  {
    name: "Afghanistan",
  },
  {
    name: "Åland Islands",
  },
];

const unitedCountryData = [
  {
    name: "United States Minor Outlying Islands",
  },
  {
    name: "United Arab Emirates",
  },
  {
    name: "United States of America",
  },
];

const networkError = new Error("Network Error");

const formattedData = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    independent: false,
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    independent: false,
  },
  {
    name: "Albania",
    capital: "Tirana",
    region: "Europe",
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    independent: false,
  },
];

const poundData = [
  {
    name: "United States Minor Outlying Islands",
    region: "Americas",
    population: 300,
    flag: "https://flagcdn.com/um.svg",
    independent: false,
  },
  {
    name: "Guernsey",
    capital: "St. Peter Port",
    region: "Europe",
    population: 62999,
    flag: "https://flagcdn.com/gg.svg",
    independent: false,
  },
  {
    name: "Isle of Man",
    capital: "Douglas",
    region: "Europe",
    population: 85032,
    flag: "https://flagcdn.com/im.svg",
    independent: false,
  },
  {
    name: "Jersey",
    capital: "Saint Helier",
    region: "Europe",
    population: 100800,
    flag: "https://flagcdn.com/je.svg",
    independent: false,
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    region: "Europe",
    population: 67215293,
    flag: "https://flagcdn.com/gb.svg",
    independent: false,
  },
];

const caricomData = [
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    region: "Americas",
    population: 97928,
    flag: "https://flagcdn.com/ag.svg",
    independent: false,
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    region: "Americas",
    population: 393248,
    flag: "https://flagcdn.com/bs.svg",
    independent: false,
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    region: "Americas",
    population: 287371,
    flag: "https://flagcdn.com/bb.svg",
    independent: false,
  },
  {
    name: "Belize",
    capital: "Belmopan",
    region: "Americas",
    population: 397621,
    flag: "https://flagcdn.com/bz.svg",
    independent: false,
  },
  {
    name: "Dominican Republic",
    capital: "Santo Domingo",
    region: "Americas",
    population: 10847904,
    flag: "https://flagcdn.com/do.svg",
    independent: false,
  },
  {
    name: "Grenada",
    capital: "St. George's",
    region: "Americas",
    population: 112519,
    flag: "https://flagcdn.com/gd.svg",
    independent: false,
  },
  {
    name: "Guyana",
    capital: "Georgetown",
    region: "Americas",
    population: 786559,
    flag: "https://flagcdn.com/gy.svg",
    independent: false,
  },
  {
    name: "Haiti",
    capital: "Port-au-Prince",
    region: "Americas",
    population: 11402533,
    flag: "https://flagcdn.com/ht.svg",
    independent: false,
  },
  {
    name: "Jamaica",
    capital: "Kingston",
    region: "Americas",
    population: 2961161,
    flag: "https://flagcdn.com/jm.svg",
    independent: false,
  },
  {
    name: "Montserrat",
    capital: "Plymouth",
    region: "Americas",
    population: 4922,
    flag: "https://flagcdn.com/ms.svg",
    independent: false,
  },
  {
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    region: "Americas",
    population: 53192,
    flag: "https://flagcdn.com/kn.svg",
    independent: false,
  },
  {
    name: "Saint Lucia",
    capital: "Castries",
    region: "Americas",
    population: 183629,
    flag: "https://flagcdn.com/lc.svg",
    independent: false,
  },
  {
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    region: "Americas",
    population: 110947,
    flag: "https://flagcdn.com/vc.svg",
    independent: false,
  },
  {
    name: "Suriname",
    capital: "Paramaribo",
    region: "Americas",
    population: 586634,
    flag: "https://flagcdn.com/sr.svg",
    independent: false,
  },
  {
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    region: "Americas",
    population: 1399491,
    flag: "https://flagcdn.com/tt.svg",
    independent: false,
  },
];

const germanData = [
  {
    name: "Austria",
    capital: "Vienna",
    region: "Europe",
    population: 8917205,
    flag: "https://flagcdn.com/at.svg",
    independent: false,
  },
  {
    name: "Belgium",
    capital: "Brussels",
    region: "Europe",
    population: 11555997,
    flag: "https://flagcdn.com/be.svg",
    independent: false,
  },
  {
    name: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 83240525,
    flag: "https://flagcdn.com/de.svg",
    independent: false,
  },
  {
    name: "Vatican City",
    capital: "Vatican City",
    region: "Europe",
    population: 451,
    flag: "https://flagcdn.com/va.svg",
    independent: false,
  },
  {
    name: "Liechtenstein",
    capital: "Vaduz",
    region: "Europe",
    population: 38137,
    flag: "https://flagcdn.com/li.svg",
    independent: false,
  },
  {
    name: "Luxembourg",
    capital: "Luxembourg",
    region: "Europe",
    population: 632275,
    flag: "https://flagcdn.com/lu.svg",
    independent: false,
  },
  {
    name: "Switzerland",
    capital: "Bern",
    region: "Europe",
    population: 8636896,
    flag: "https://flagcdn.com/ch.svg",
    independent: false,
  },
];

const europeData = {
  data: [
    {
      name: "Åland Islands",
      capital: "Mariehamn",
      region: "Europe",
      population: 28875,
      flag: "https://flagcdn.com/ax.svg",
      independent: false,
    },
    {
      name: "Albania",
      capital: "Tirana",
      region: "Europe",
      population: 2837743,
      flag: "https://flagcdn.com/al.svg",
      independent: false,
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      region: "Europe",
      population: 77265,
      flag: "https://flagcdn.com/ad.svg",
      independent: false,
    },
  ],
};

module.exports = {
  allCountryData,
  unitedCountryData,
  networkError,
  formattedData,
  poundData,
  caricomData,
  germanData,
  europeData,
};
