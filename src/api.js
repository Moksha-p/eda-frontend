import axios from "axios";

const API_BASE = "http://localhost:8000"; // Change if using Docker

export const addOrder = (order) =>
  axios.post(`${API_BASE}/inventory/add`, order);

export const getPendingOrders = () =>
  axios.get(`${API_BASE}/inventory/pending`);

export const approveOrder = (orderId) =>
  axios.post(`${API_BASE}/inventory/approve/${orderId}`);
