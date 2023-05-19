import axios from 'axios';
import { getAuthToken } from './Auth';

// Define the base URL for your API
const BASE_URL = 'https://admin.mybutler.co/api';

// Function to make the GET API request
export const getRestaurantsData = async () => {
  try {
    const token = getAuthToken();
    console.log(token);
    const response = await axios.get(`${BASE_URL}/restaurants?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    });
    return response?.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching API endpoint:', error);
    throw error;
  }
};
