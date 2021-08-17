import axios from "axios";
const API = "https://rickandmortyapi.com/api/character/?page=2";

export default {
  get() {
    return axios.get(API);
  },
  create(personajes) {
    return axios.post(API, personajes);
  }
};