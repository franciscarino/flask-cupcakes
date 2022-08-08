"use strict";

const BASE_API_URL = "http://localhost:5001/api";
const $cupcakesList = $("ol");
const $cupcakeAddForm = $("form");


//make a request to the api to get list of cupcakes
//use the request to update list of cupcakes

/** Updates homepage with a list of cupcakes in database */
async function fetchAllCupcakes(){
  const cupcakes = await axios.get(`${BASE_API_URL}/cupcakes`)
  const cupcakeList = []

  for (let result of cupcakes.data.cupcakes) {
    const cupcake = {
      id: result.id,
      flavor: result.flavor,
      size: result.size,
      rating: result.rating,
      image: result.image
    };

    cupcakeList.push(cupcake);
  }
  addCupcakeToList(cupcakeList);
}

/** Adds item(s) to list */
function addCupcakeToList(cupcakes) {
  for (let cupcake of cupcakes) {
    const $cupcake = $("<ul>").append(`<img src = ${cupcake.image} width = 200px height = 200px>`)
                              .append("<li>").append(`Flavor: ${cupcake.flavor}`)
                              .append("<li>").append(`Size: ${cupcake.size}`)
                              .append("<li>").append(`Rating: ${cupcake.rating}`);
    $cupcakesList.append("<li>").append($cupcake);
  }
}

//send a post request to add a cupcake
//add cupcake to list


fetchAllCupcakes();