import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomeView from "../../views/HomeView";

const AuthNavigate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/lobby" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AuthNavigate;
