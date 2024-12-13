import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import Favourites from "../pages/Favourites";
import NotFound from "../pages/NotFound";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/favourites" element={<Favourites />} />
    <Route path="*" element={<NotFound />} />{" "}
  </Routes>
);

export default Router;
