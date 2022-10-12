"use strict";

let url = "https://rickandmortyapi.com/api/character";

let char = await fetch(url)
  .then((res) => res.json())
  .then((char) => char);

const insert = document.querySelector(".main");

const input = document.querySelector("input");
inputData.addEventListener("change", inputHandler);

const select = document.querySelector("select");
selectData.addEventListener("change", inputHandler);
