// src/components/Search.jsx
import { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepoCount, setMinRepoCount] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepoCount });
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find any users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          className="border rounded w-full p-2"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="border rounded w-full p-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="border rounded w-full p-2"
          placeholder="Minimum Repositories"
          value={minRepoCount}
          onChange={(e) => setMinRepoCount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (<div className="mt-4">
      {userData.items.map((user) => (
      <div key={user.id} className="p-4 border rounded mb-2">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <h2 className="text-xl font-bold">{user.login}</h2>
        <p>Location: {user.location || 'N/A'}</p>
        <p>Repositories: {user.public_repos}</p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          View Profile
        </a>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default Search;
