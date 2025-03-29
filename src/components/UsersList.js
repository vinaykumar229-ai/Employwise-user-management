import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

function UsersList({ setIsAuthenticated, users, setUsers }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    });
  }, [page, setUsers]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-container">
      <input type="text" placeholder="Search Users" onChange={(e) => setSearch(e.target.value.toLowerCase())} className="search-bar"/>
      
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.filter((user) => user.first_name.toLowerCase().includes(search)).map((user) => (
              <tr key={user.id}>
                <td><img src={user.avatar} alt={user.first_name} className="avatar" /></td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="gradient-button" onClick={() => handleEdit(user.id)}>Edit</button>
                  <button className="gradient-button delete" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}

      <div className="pagination">
        <button className="gradient-button" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button className="gradient-button" onClick={() => setPage(page + 1)} disabled={page >= totalPages || users.length === 0}>Next</button>
      </div>
      
      <button className="gradient-button logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UsersList;
