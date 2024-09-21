// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async ({ username, location, minRepoCount }) => {
  let query = '';

  // Build the query string
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepoCount) query += ` repos:>${minRepoCount}`;

  try {
    // Make the API call using axios
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data;  // Return the user data from the response
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;  // Throw error so that the component can handle it
  }
};
