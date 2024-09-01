import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/blog/1">Sample Blog Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
