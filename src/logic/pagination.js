import axios from "axios";
const API = "https://rickandmortyapi.com/api/character/?page=";

export default {
  get() {
    return axios.get(API);
  },
  create(pagination) {
    return axios.post(API + pagination);
  }
};