import React, { useState } from 'react';
import {Modal} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Example() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const CreateUser = async () => {
    try {
        await axios.post("http://localhost:5000/users", {
            name: name,
            email: email,
            password: password,
            confPassword : confPassword,
            username: username,
            role: role
        });
        navigate('/users');
        alert("user create");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <button className='btn btn-sm btn-rounded-full bg-blue-500  hover:bg-blue-700 text-white my-3' onClick={handleOpen}>
        Add User
      </button>


      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <form onSubmit={CreateUser}>
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="username" 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Username"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" 
                id="email" 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Active Email"
              />
          
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password<span className="text-red-300">*</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm mb-3">
                <input
                  type={'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full flex-1 rounded-none border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder:text-gray-300"
                  placeholder="Password"
                />
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password<span className="text-red-300">*</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm mb-3">
                <input
                  type={'password'}
                  id="confPassword"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  className="block w-full flex-1 rounded-none border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder:text-gray-300"
                  placeholder="Confirm Password"
                />
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                Role<span className="text-red-300">*</span>
              </label>
              <select
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" >-- select option --</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select>
                
              <div className="field mt-6 text-center">
                  <div className="control">
                    <button className="btn rounded-full bg-blue-500 hover:bg-blue-700 text-white">Send</button>
                  </div>
                </div>
            </form>
      </div>
        </Box>
      </Modal>
    </>
  );
}

export default Example;