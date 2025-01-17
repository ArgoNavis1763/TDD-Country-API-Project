const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/fetch-countries");
  console.log(response);
  const data = await response.json();
  createCards(data);
});

const createCards = (countries) => {
  countries.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const flag = document.createElement("img");
    flag.classList.add("flag");
    flag.src = country.flag;
    card.appendChild(flag);

    const content = document.createElement("div");
    content.classList.add("content");
    card.appendChild(content);

    const name = document.createElement("h4");
    name.classList.add("name");
    name.innerText = country.name;
    content.appendChild(name);

    const population = document.createElement("p");
    population.classList.add("population");
    population.innerHTML = `<strong>Population:</strong> ${country.population}`;
    content.appendChild(population);

    const region = document.createElement("p");
    region.classList.add("region");
    region.innerHTML = `<strong>Region:</strong> ${country.region}`;
    content.appendChild(region);

    const capital = document.createElement("p");
    capital.classList.add("capital");
    capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;
    content.appendChild(capital);
  });
};

let selectedRegion = "";

const regionDropdown = document.getElementById("region");
regionDropdown.addEventListener("change", async (event) => {
  container.innerHTML = "";
  selectedRegion = event.target.value;
  const response = await fetch(`/fetch-countries/${selectedRegion}`);
  const data = await response.json();
  createCards(data);
});

const input = document.getElementById("input");
input.addEventListener("input", async (event) => {
  container.innerHTML = "";
  let inputValue = event.target.value;
  const response = await fetch(`/fetch-countries/name/${inputValue}`);
  const data = await response.json();
  createCards(data);
});
