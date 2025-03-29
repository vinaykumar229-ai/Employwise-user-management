import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import "./styles/styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/users" />} />
        <Route path="/users" element={isAuthenticated ? <UsersList setIsAuthenticated={setIsAuthenticated} users={users} setUsers={setUsers} /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={isAuthenticated ? <EditUser users={users} setUsers={setUsers} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;