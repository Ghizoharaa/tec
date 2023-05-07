import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Home } from './dashbordpages/Home';
import Admin from './dashbordpages/Admin';
import Users from './dashbordpages/Users';

const DashboredContent = () => {
  return (
    <Routes>
    <Route index path="/" element={<Home/>}></Route>
    <Route  path="/users" element={<Users/>}></Route>
    <Route  path="/news" element={<p>news</p>}></Route>
    <Route  path="/request" element={<p>reques</p>}></Route>
    <Route  path="/admin" element={<Admin/>}></Route>
    
  </Routes>
  );
}

export default DashboredContent;
