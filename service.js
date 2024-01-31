const axios = require("axios");
const baseURL = "https://swapi.dev/api/people";

async function getPeople(name) {
  try {
    const url = `${baseURL}/?search=${name}&format=json`;
    const response = await axios.get(url);
    return response.data.results.map(mapPeople);
  } catch (error) {
    console.error("Apareceu um erro!", error);
    throw error;
  }
}

function mapPeople(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = {
  getPeople,
};
