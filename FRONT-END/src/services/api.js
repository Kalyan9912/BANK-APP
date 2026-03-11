import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getAccounts = () => {
  return axios.get(`${API_URL}/accounts`);
};

export const getTransactions = () => {
  return axios.get(`${API_URL}/transactions`);
};
