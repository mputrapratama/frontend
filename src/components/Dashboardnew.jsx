import React from 'react';
import '../css/additional-styles/dashboard.css';
import MainDash from './dashboard/MainDash/MainDash';
import RightSide from './dashboard/RigtSide/RightSide';
import Sidebar from './dashboard/Sidebar';

const Dashboardnew = () => {
  return (
    <div className='App'>
        <div className='AppGlass'>
            <Sidebar/>
            <MainDash/>
            <RightSide/>
        </div>
    </div>
  )
}

export default Dashboardnew