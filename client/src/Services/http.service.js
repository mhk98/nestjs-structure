import axios from "axios";

// All api call
export const api = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
  headers: {
    token: `Bearer ${localStorage.getItem("SavedToken")}`,
  },
});

// Login use
export const public_api = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000, //max response time in mile second
});
