import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const onAdd = async (name, email, username, phone) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          username: username,
          phone: phone,
          // city: city
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.status !== 201) {
        return;
      }
      const data = await response.json();
      setUsers((users) => [...users, data]);

    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (id, updatedUser) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.status === 200) {
        const updatedUsers = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
        setUsers(updatedUsers);
      } else {
        console.error("Failed to update user:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  const onDelete = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      if (response.status !== 200) {
        return;
      }
      setUsers((users) => users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ users, onAdd, onEdit, onDelete,fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
