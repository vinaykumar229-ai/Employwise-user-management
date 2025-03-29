import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/users");
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="gradient-button" type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
export default Login;
