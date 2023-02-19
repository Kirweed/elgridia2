import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import LobbyView from "../views/LobbyView";
import GameView from "../views/GameView";

const AuthNavigate = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/lobby" />} />
      <Route path="/lobby" element={<LobbyView />} />
      <Route path="/game" element={<GameView />} />
    </Routes>
  </BrowserRouter>
);

export default AuthNavigate;
