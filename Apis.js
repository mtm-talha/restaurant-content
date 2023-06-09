import axios from "axios";
import { getAuthToken } from "./Auth";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getRestaurantsData = async (postId) => {
  try {
    const token = getAuthToken();
    const url = postId
      ? `${baseUrl}/restaurants?populate=*&filters[post][id][$eq]=${postId}`
      : `${baseUrl}/restaurants?populate=*`;
    const response = await axios.get(url, {
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
// Function to make the GET API request
export const getPostDataByTitle = async (title, query) => {
  try {
    const token = getAuthToken();
    const queryParam = query ? `&populate[restaurants][populate][0]=media` : ``;

    const response = await axios.get(
      `${baseUrl}/posts/?filters[title][$eq]=${title}${queryParam}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching API endpoint:", error);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${baseUrl}/posts?populate[0]=picture`, {
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
export const getRecentPosts = async () => {
  try {
    const today = new Date();
    const date = new Date(today.setDate(today.getDate() - 5)).toISOString();

    const token = getAuthToken();
    const response = await axios.get(
      `${baseUrl}/posts?populate[0]=picture&filters[dateTime][$gte]=${date}&pagination[page]=1&pagination[pageSize]=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching API endpoint:", error);
    throw error;
  }
};
