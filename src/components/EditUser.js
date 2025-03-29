import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/styles.css";

function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find user based on ID
  const user = users.find((user) => user.id === parseInt(id));

  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  // Initialize user data in state when component loads
  useEffect(() => {
    if (user) {
      setUpdatedUser(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update local users state directly
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === parseInt(id) ? { ...u, ...updatedUser } : u))
    );

    navigate("/users");
  };

  return (
    <div className="edit-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          name="first_name"
          value={updatedUser.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          value={updatedUser.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
          required
        />
        <button className="gradient-button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
