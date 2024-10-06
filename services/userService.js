// services/userService.js  
import axios from 'axios';  

const API_URL = 'http://localhost:3000/users'; // Adjust the port as necessary  

export const getUsers = async () => {  
  const response = await axios.get(API_URL);  
  return response.data;  
};  

export const createUser = async (user) => {  
  const response = await axios.post(API_URL, user);  
  return response.data;  
}; 