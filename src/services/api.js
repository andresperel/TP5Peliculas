import axios from "axios";

const API_KEY = "19b0e5de"; 
const URL = "https://www.omdbapi.com/";

export const buscarPeliculas = async (texto) => {
  const respuesta = await axios.get(URL, {
    params: {
      apikey: API_KEY,
      s: texto,
    },
  });
  return respuesta.data;
};

export const obtenerDetalle = async (id) => {
  const respuesta = await axios.get(URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return respuesta.data;
};