import React, { useEffect, useContext } from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import Login from "./components/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./components/Dashboard";
import Product from "./pages/Product";
import Users from "./pages/Users";
import AddProduct from "./pages/AddProduct";
import AddUser from "./components/d1/components/datatable/AddUser";
import RegisterUser from "./pages/RegisterUsers";
import EditProduct from "./pages/EditProduct";
import EditUser from "./pages/EditUser";
import Customers from "./pages/Customers";
import Success from "./pages/Success";
import DashboardHome from "./components/d1/pages/home/Home";
import DashboardLogin from "./components/d1/pages/login/Login";
import DashboardList from "./components/d1/pages/list/List";
import DashboardSingle from "./components/d1/pages/single/Single";
import DashboardProduct from "./components/d1/pages/list/ListProducts";
import "./components/d1/style/dark.scss";
import { DarkModeContext } from "./components/d1/context/darkModeContext";
import VerifyPage from "./pages/Pending";
import VerifyRegister from "./pages/VerifyRegister";





function App() {

  const location = useLocation();

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/notif/:token" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/customers-list" element={<Customers />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboardnew/" element={<DashboardHome />}/>
        <Route path="/dashboardnew/login" element={<DashboardLogin />}/>
        <Route path="/dashboardnew/users" element={<DashboardList />}/>
        <Route path="/dashboardnew/users/:userId" element={<DashboardSingle />}/>
        <Route path="/dashboardnew/users/new" element={<AddUser />}/>
        <Route path="/dashboardnew/products" element={<DashboardProduct />}/>
        <Route path="/:username/verify/SDHFDSUFUdifurtrut9r0eHDHFSID9ruri" element={<VerifyRegister/>}/>
        <Route path="/verify" element={<VerifyPage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
