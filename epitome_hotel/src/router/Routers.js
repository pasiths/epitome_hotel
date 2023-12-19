import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Cafe from "../pages/Cafe"
import Kitchen from "../pages/Kitchen";
import AddFoodItem from "../pages/AddFoodItem";
import RooftopPoolbarHome from "../pages/RooftopPoolbarHome";
import Cloud9CafeHome from "../pages/Cloud9CafeHome";
import Feast365ResturentHome from "../pages/Feast365ResturentHome"
import ColdKitchen from "../pages/ColdKitchen";
import HotKitchen from "../pages/HotKitchen";
import MainBar from "../pages/MainBar";
import AdminPanel from "../pages/AdminPanel";
import Profile from "../pages/Profile";
import AdminProfile from "../pages/AdminProfile";
import UserProfile from "../pages/UserProfile"


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
      <Route path="/cloud9cafeHome" element={<Cloud9CafeHome/>}/>
      <Route path="/feast365resturenthome" element={<Feast365ResturentHome/>}/>
      <Route path="/coldkitchen" element={<ColdKitchen/>}/>
      <Route path="/hotkitchen" element={<HotKitchen/>}/>
      <Route path="/mainbar" element={<MainBar/>}/>
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/adminprofile" element={<AdminProfile/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>


    </Routes>
  );
};

export default Routers;
