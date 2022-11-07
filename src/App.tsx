import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeView from "./views/HomeView";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
