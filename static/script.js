"use strict";

const BASE_API_URL = "http://localhost:5001/api";
const $cupcakesList = $("ol");
const $cupcakeAddForm = $("form");

//make a request to the api to get list of cupcakes
//use the request to update list of cupcakes

/** Updates homepage with a list of cupcakes in database */
async function fetchAllCupcakes() {
  const cupcakes = await axios.get(`${BASE_API_URL}/cupcakes`);
  const cupcakeList = [];

  for (let result of cupcakes.data.cupcakes) {
    const cupcake = {
      id: result.id,
      flavor: result.flavor,
      size: result.size,
      rating: result.rating,
      image: result.image,
    };

    cupcakeList.push(cupcake);
  }

  for (let cupcake of cupcakeList) {
    addCupcakeToList(cupcake);
  }
}

/** Adds item(s) to list */
function addCupcakeToList(cupcake) {
  const $cupcake = $("<ul>")
    .append(`<img src = ${cupcake.image} width = 200px height = 200px>`)
    .append("<li>")
    .append(`Flavor: ${cupcake.flavor}`)
    .append("<li>")
    .append(`Size: ${cupcake.size}`)
    .append("<li>")
    .append(`Rating: ${cupcake.rating}`);

  $cupcakesList.append("<li>").append($cupcake);
}

//send a post request to add a cupcake
//add cupcake to list
async function addNewCupcake() {
  let flavor = $("#flavor").val();
  let size = $("#size").val();
  let rating = $("#rating").val();
  let image = $("#image").val();

  const response = await axios.post(`${BASE_API_URL}/cupcakes`, {
    flavor: flavor,
    size: size,
    rating: rating,
    image: image,
  });

  const result = response.data.cupcake;

  const cupcake = {
    id: result.id,
    flavor: result.flavor,
    size: result.size,
    rating: result.rating,
    image: result.image,
  };

  addCupcakeToList(cupcake);
  $cupcakeAddForm.trigger("reset");
}

$cupcakeAddForm.on("submit", async function (evt) {
  evt.preventDefault();

  await addNewCupcake();
});

fetchAllCupcakes();
