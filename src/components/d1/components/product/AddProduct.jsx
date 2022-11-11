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
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const CreateProduct = async () => {
    try {
        await axios.post("http://localhost:5000/products", {
            name: name,
            desc: desc,
            image: image,
            author : author,
            budget: budget
        });
        navigate('/products');
        alert("product create");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <button className='btn btn-sm btn-rounded-full bg-blue-500  hover:bg-blue-700 text-white my-3' onClick={handleOpen}>
        Add Product
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
            Add New Product
          </Typography>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <form onSubmit={CreateProduct} encType="multipart/form-data">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="product-name" 
                type={'text'} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Budget<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="product-name" 
                type={'number'} 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Value"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Description<span className="text-red-300">*</span>
              </label>
              <textarea
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Product Description"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="file">
                Picture<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" 
                id="file" 
                type={'file'} 
                onChange={(e) => setImg(e.target.files[0])}
              />
          
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Author<span className="text-red-300">*</span>
              </label>
                <input
                  type={'text'}
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required"
                  placeholder="Created by"
                />
                
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