import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormCustomers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContact] = useState("");
  const [os, setOs] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/customers", {
        name : name,
        email: email,
        contactNumber: contactNumber,
        os: os,
        desc: desc,
      });
      await axios.put("http://localhost:5000/notif", {
        name : name,
        email: email,
        contactNumber: contactNumber,
        os: os,
        desc: desc,
      })
      navigate("/success")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="relative" id="form">
      <div className="relative max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h2 className="h2 mb-4">Interested in our project?</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"> Please fill out the form below for more information about your projects</p>
          </div>
          <div className="mx-auto mt-5" style={{width: 400}} data-aos="zoom-y-out">
            <form onSubmit={saveCustomer}>
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name<span className="text-red-300">*</span>
              </label>
              <input 
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300 required" 
                id="username" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
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
                Number Phone<span className="text-red-300">*</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm mb-3">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-50 px-3 text-sm text-gray-500">
                  +62
                </span>
                <input
                  type="number"
                  id="contactnumber"
                  value={contactNumber}
                  onChange={(e) => setContact(e.target.value)}
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder:text-gray-300"
                  placeholder="81234567890"
                />
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Interest In<span className="text-red-300">*</span>
              </label>
              <select
                className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3"
                value={os}
                onChange={(e) => setOs(e.target.value)}
              >
                <option value="" >-- select option --</option>
                <option value="android">Android</option>
                <option value="website">Website</option>
              </select>
              
              <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Description
              </label>
              <textarea 
                className="texterea block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" 
                id="email" 
                type="text" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Your Active Email"
              />
                
              <div className="field mt-6 text-center">
                  <div className="control">
                    <button className="btn rounded-full bg-blue-500 hover:bg-blue-700 text-white mb-10">Send</button>
                    <br/><br/><br/><br/>
                  </div>
                </div>
            </form>
          </div>
    </section>
  )
}

export default FormCustomers;