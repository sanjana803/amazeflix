import React from 'react';
import {  removeUserSession } from './Utils/Common';
import './Dasboard.css';


function Dashboard(props) {

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="content">

      <div className="logout">
      <button onClick={handleLogout}>Log Out</button></div>
     
    </div>
    
  );
}

export default Dashboard;