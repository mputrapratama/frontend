import React, { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/login', {
              email: email,
              password: password
          });
          navigate("/dashboardnew");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">One touch again! <br></br>Please login to your account</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={Auth}>
                  <p className="text-center">{msg}</p>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                      <input id="email" type="email" className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="input your email"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <Link to="/login/reset-password" className="text-sm font-medium text-blue-600 hover:underline">have problems logging in?</Link>
                      </div>
                      <input id="password" type="password" className="block w-full flex-1 rounded-md border-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 placeholder:text-gray-300" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="input your password" />
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
                        Login
                      </button>
                    </div>
                  </div>
                </form>
            
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default Login;