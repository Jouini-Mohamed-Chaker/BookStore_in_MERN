import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import Favourites from "../pages/Favourites";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/favourites" element={<Favourites />} />{" "}
  </Routes>
);

export default Router;
