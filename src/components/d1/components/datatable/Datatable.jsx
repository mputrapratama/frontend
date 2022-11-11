import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const Datatable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const users = await axios.get("http://localhost:5000/users");
    setUsers(users.data);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      alert('user has deleted');
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-5">
      <h1 className="font-bold mt-2">Users</h1>
      <h2 className="font-medium">List of Users</h2>
      
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <AddUser/>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">No</th>
              <th scope="col" className="py-3 px-6">Name</th>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Role</th>
              <th scope="col" className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.uuid}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">{user.role}</td>
                <td>
                  <EditUser/>
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="btn ml-3 py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-full hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datatable;
