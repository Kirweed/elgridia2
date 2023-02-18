import { useAuth } from "./auth";
import AuthNavigate from "./routing/AuthNavigate";
import UnauthNavigate from "./routing/UnauthNavigate";

const App = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AuthNavigate /> : <UnauthNavigate />;
};

export default App;
