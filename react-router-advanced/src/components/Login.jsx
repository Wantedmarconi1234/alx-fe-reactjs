// src/components/Login.jsx
const Login = ({ setIsAuthenticated }) => {
  const handleLogin = () => {
    // Simulate authentication process
    setIsAuthenticated(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
