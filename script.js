"use strict";

let url = "https://rickandmortyapi.com/api/character/";

let arr = [];
for (let i = 1; i <= 826; i++) {
  arr.push(i);
}

let char = await fetch(url + arr)
  .then((res) => res.json())
  .then((char) => char);

const insert = document.querySelector(".main");

const input = document.querySelector("input");
input.addEventListener("change", searchFilter);

const select = document.querySelector("select");
select.addEventListener("change", searchFilter);

function createCard(char) {
  const card = document.createElement("div");
  card.className = "insert__card";

  const img = document.createElement("img");
  img.setAttribute("src", char.image);
  img.setAttribute("width", "220");
  img.setAttribute("height", "220");

  const name = document.createElement("p");
  name.innerHTML = `<b>Name:</b> ${char.name}`;

  const status = document.createElement("p");
  status.innerHTML = `<b>Status:</b> ${char.status}`;

  const species = document.createElement("p");
  species.innerHTML = `<b>Species:</b> ${char.species}`;

  const gender = document.createElement("p");
  gender.innerHTML = `<b>Gender:</b> ${char.gender}`;

  const origin = document.createElement("p");
  origin.innerHTML = `<b>Origin:</b> ${char.origin.name}`;

  const location = document.createElement("p");
  location.innerHTML = `<b>Location:</b> ${char.location.name}`;

  card.append(img);
  card.append(name);
  card.append(status);
  card.append(species);
  card.append(gender);
  card.append(origin);
  card.append(location);

  return card;
}

char.forEach((elem) => {
  insert.append(createCard(elem));
});

function searchFilter() {
  let pers = input.value.toLowerCase().trim();
  let specie = select.value.toLowerCase();
  let filtered = char
    .filter((elem) => elem.name.toLowerCase().includes(pers))
    .filter(
      (elem) => elem.species.toLowerCase() === specie || specie === "all"
    );
  insert.innerHTML = "";
  filtered.forEach((elem) => insert.append(createCard(elem)));
  input.value = "";
}
