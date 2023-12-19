import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Cafe from "../pages/Cafe"
import Kitchen from "../pages/Kitchen";
import AddFoodItem from "../pages/AddFoodItem";
import RooftopPoolbarHome from "../pages/RooftopPoolbarHome";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/> }/>
      <Route path="/cafe" element={<Cafe/>}/>
      <Route path="/kitchen" element={<Kitchen/>}/>
      <Route path="/addfooditem" element={<AddFoodItem/>}/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/register" element={<Register/> }/>
      <Route path="/rooftoppoolbarhome" element={<RooftopPoolbarHome/>}/>
    </Routes>
  );
};

export default Routers;
