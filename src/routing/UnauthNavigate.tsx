import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomeView from "../views/HomeView";

const UnauthNavigate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeView />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/lobby" element={<Navigate to="/home" />} />
      <Route path="/game" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
);

export default UnauthNavigate;
