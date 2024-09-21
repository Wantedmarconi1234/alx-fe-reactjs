// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = "https://api.github.com/search/users?q"; // Correct API URL


/**
 * Fetch user data from GitHub based on advanced search criteria.
 * @param {Object} searchParams - Object containing search criteria (username, location, minRepoCount).
 * @returns {Promise<Object>} - A promise resolving to the GitHub search result.
 */
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  // Initialize the query string
  let query = '';

  // Append search parameters to the query string
  if (username) query += `${username} in:login`;           // Search by username
  if (location) query += ` location:${location}`;          // Filter by location
  if (minRepos) query += ` repos:>${minRepos}`;    // Filter by minimum repository count

  try {
    // Make the API request to the GitHub Search API
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data;  // Return the search results
  } catch (error) {
    console.error('Error fetching advanced user data:', error);  // Log any errors
    throw error;  // Rethrow the error to be handled by the component
  }
};
