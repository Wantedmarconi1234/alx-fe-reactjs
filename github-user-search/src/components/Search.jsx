// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import API service

const Search = () => {
  const [username, setUsername] = useState(''); // Input username state
  const [userData, setUserData] = useState(null); // Fetched user data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setUserData(null); // Clear previous data

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Store user data in state
    } catch (err) {
      setError("Looks like we can’t find the user"); // Set error if API call fails
    } finally {
      setLoading(false); // Stop loading when API call finishes
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Capture input value
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on loading, error, and userData */}
      {loading && <p>Loading...</p>} {/* Loading message */}
      {error && <p>{error}</p>} {/* Error message */}

      {userData && (
        <div>
          {/* Display user's avatar, login, and profile link */}
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
