// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Throw error if the request fails
  }
};
