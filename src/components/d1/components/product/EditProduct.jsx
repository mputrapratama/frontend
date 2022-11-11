import React, { useState, useEffect } from 'react';
import {Modal} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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

function EditProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [budget, setBudget] = useState("");
  const [image, setImage] = useState(true);
  const [author, setAuthor] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const product = await axios.get(`http://localhost:5000/products/${id}`);
        setName(product.data.name);
        setDesc(product.data.desc);
        setBudget(product.data.budget);
        setImage(product.data.image);
        setAuthor(product.data.author);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const EditUser = async () => {
    try {
        await axios.patch(`http://localhost:5000/products/edit/${id}`, {
            name: name,
            desc: desc,
            budget: budget,
            image : image,
            author: author
        });
        alert("product has edited");
        navigate('/products');
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <button className='btn py-2 px-3 text-xs font-medium text-center text-white bg-blue-500 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleOpen}>
        Edit
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
            Edit Product
          </Typography>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <form onSubmit={EditProduct}>
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="Desc">
                Description<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="desc" 
                type="text" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Product Description"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2" for="budget">
                Price<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" 
                id="budget" 
                type="text" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Product Price"
              />
          
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image<span className="text-red-300">*</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm mb-3">
                <input
                  type={'file'}
                  id="image"
                  onChange={(e) => setImage(e.target.files)}
                  className="block w-full flex-1 rounded-none border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder:text-gray-300"
                />
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Author<span className="text-red-300">*</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm mb-3">
                <input
                  type={'text'}
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="block w-full flex-1 rounded-none border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder:text-gray-300"
                  placeholder="Authors"
                />
              </div>
  
              <div className="field mt-6 text-center">
                  <div className="control">
                    <button className="btn rounded-full bg-blue-500 hover:bg-blue-700 text-white">Change & Save</button>
                  </div>
                </div>
            </form>
      </div>
        </Box>
      </Modal>
    </>
  );
}

export default EditProduct;