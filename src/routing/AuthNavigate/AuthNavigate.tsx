import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import LobbyView from "../../views/LobbyView";

const UnauthNavigate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/lobby" />} />
      <Route path="/lobby" element={<LobbyView />} />
    </Routes>
  </BrowserRouter>
);

export default UnauthNavigate;
