import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../partials/Footer';


const RegisterUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Regist = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/auth', {
          name: name,
          email: email,
          password: password
        });
        navigate("/verify");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

        <Header/>

        <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Hello There! <br></br>Create Your Awasome Account</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={Regist}>
                  <p className="text-center">{msg}</p>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name' >Name</label>
                      <input id="username" type={'text'} className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" value={name} onChange={(e) => setName(e.target.value)} placeholder="input your name"/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                      <input id="email" type="email" className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="input your email"/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='password' >Password</label>
                      <input id="password" type={'password'} className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="input your password"/>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" required />
                          <span className="text-gray-600 ml-2">I have read and agree <Link className="hover:text-blue-500" to={'/privacy-policy'}>privacy & policy</Link></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6 text-center">
                    <div className="w-full px-3">
                      <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 rounded-full">
                        Create
                      </button>
                    </div>
                  </div>
                </form>
            
              </div>

            </div>
          </div>
        </section>

      </main>

    <Footer/>

    </div>
  );
};

export default RegisterUsers;