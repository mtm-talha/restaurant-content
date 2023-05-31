

import axios from "axios";
import { getAuthToken } from "./Auth";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Function to make the GET API request
export const getRestaurantsData = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${baseUrl}/restaurants?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching API endpoint:", error);
    throw error;
  }
};
