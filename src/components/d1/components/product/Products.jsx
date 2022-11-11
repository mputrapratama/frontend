import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await axios.get("http://localhost:5000/products");
    setProducts(products.data);
  };

  const deleteProduct = async(productId)=> {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`)
      alert('product has deleted');
      getProducts();
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="m-5">
      <h1 className="font-bold mt-2">Products</h1>
      <h2 className="font-medium">List of Products</h2>
      
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <AddProduct/>
        <table className="w-full text-l text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">No</th>
              <th scope="col" className="py-3 px-6">Name</th>
              <th scope="col" className="py-3 px-6">Desc</th>
              <th scope="col" className="py-3 px-6">Budget</th>
              <th scope="col" className="py-3 px-6">Image</th>
              <th scope="col" className="py-3 px-6">Author</th>
              <th scope="col" className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.uuid}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{product.name}</td>
                <td className="py-4 px-6">{product.desc}</td>
                <td className="py-4 px-6">{product.budget}</td>
                <td className="py-4 px-6"><img src={`http://localhost:5000/${product.image}`} alt="img"></img></td>
                <td className="py-4 px-6">{product.author}</td>
                <td>
                  <EditProduct/>
                  <button
                    onClick={() => deleteProduct(product.uuid)}
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

export default Products;
