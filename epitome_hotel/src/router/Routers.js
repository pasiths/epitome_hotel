import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cafe from "../pages/Cafe";
import Kitchen from "../pages/Kitchen";
import AddFoodItem from "../pages/AddFoodItem";
import RooftopPoolbarHome from "../pages/RooftopPoolbarHome";
import Cloud9CafeHome from "../pages/Cloud9CafeHome";
import Feast365ResturentHome from "../pages/Feast365ResturentHome";
import ColdKitchen from "../pages/ColdKitchen";
import HotKitchen from "../pages/HotKitchen";
import MainBar from "../pages/MainBar";
import AdminPanel from "../pages/AdminPanel";
import AdminProfile from "../pages/AdminProfile";
import UserProfile from "../pages/UserProfile";

const Routers = () => {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {user && <Route path="/admin" exact element={<AdminPanel />} />}
      {user && <Route path="/cafe" exact element={<Cafe />} />}
      {user && <Route path="/adminprofile" exact element={<AdminProfile />} />}
      {user && <Route path="/kitchen" exact element={<Kitchen />} />}
      {user && (
        <Route
          path="/rooftoppoolbarhome"
          exact
          element={<RooftopPoolbarHome />}
        />
      )}
      {user && <Route path="/addfooditem" exact element={<AddFoodItem />} />}
      {user && (
        <Route path="/cloud9cafeHome" exact element={<Cloud9CafeHome />} />
      )}
      {user && (
        <Route
          path="/feast365resturenthome"
          exact
          element={<Feast365ResturentHome />}
        />
      )}
      {user && <Route path="/coldkitchen" exact element={<ColdKitchen />} />}
      {user && <Route path="/hotkitchen" exact element={<HotKitchen />} />}
      {user && <Route path="/mainbar" exact element={<MainBar />} />}
      {user && <Route path="/adminpanel" exact element={<AdminPanel />} />}
      {user && <Route path="/userprofile" exact element={<UserProfile />} />}
      <Route path="/register" exact element={<Register />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/adminprofile" element={<Navigate replace to="/home" />} />
      <Route path="/userprofile" element={<Navigate replace to="/home" />} />
      <Route path="/cafe" element={<Navigate replace to="/home" />} />
      <Route path="/kitchen" element={<Navigate replace to="/home" />} />
      <Route path="/rooftoppoolbarhome" element={<Navigate replace to="/home" />} />
      <Route path="/addfooditem" element={<Navigate replace to="/home" />} />
      <Route path="/cloud9cafeHome" element={<Navigate replace to="/home" />} />
      <Route path="/feast365resturenthome" element={<Navigate replace to="/home" />} />
      <Route path="/coldkitchen" element={<Navigate replace to="/home" />} />
      <Route path="/hotkitchen" element={<Navigate replace to="/home" />} />
      <Route path="/mainbar" element={<Navigate replace to="/home" />} />
      <Route path="/adminpanel" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default Routers;
