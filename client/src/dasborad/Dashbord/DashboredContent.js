import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Home } from './dashbordpages/Home';
import Admin from './dashbordpages/Admin';
import Users from './dashbordpages/Users';
import News from './dashbordpages/News'
import Requests from './dashbordpages/Requests'
import Services from './dashbordpages/Services'
const DashboredContent = () => {
  return (
    <Routes>
    <Route index path="/" element={<Home/>}></Route>
    <Route  path="/users" element={<Users/>}></Route>
    <Route  path="/news" element={<News/>}></Route>
    <Route  path="/request" element={<Requests/>}></Route>
    <Route  path="/admin" element={<Admin/>}></Route>
    <Route  path="/services" element={<Services/>}></Route>
    
  </Routes>
  );
}

export default DashboredContent;
