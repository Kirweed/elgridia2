import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000/auth/";

interface ContextInterface {
  isAuthenticated: boolean;
  logIn: (username: string, password: string) => void;
  logOut: () => void;
  reAuthenticate: () => void;
}

interface Tokens {
  refreshToken: string;
  accessToken: string;
}

const TokenContext = React.createContext<ContextInterface>({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
  reAuthenticate: () => {},
});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      // in the future check here valid of token
      setIsAuthenticated(true);
    }
  }, []);

  const reAuthenticate = async () => {
    const refreshToken = localStorage.getItem("REFRESH_TOKEN");
    if (!refreshToken) return setIsAuthenticated(false);
    try {
      const { token }: { token: string } = await axios.post(
        `${BASE_URL}token/`,
        {
          refresh: refreshToken,
        }
      );
      localStorage.setItem("ACCESS_TOKEN", token);
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const logIn = async (username: string, password: string) => {
    if (!username || !password) return setIsAuthenticated(false);
    try {
      const { data: tokens }: { data: Tokens } = await axios.post(
        `${BASE_URL}login/`,
        {
          username,
          password,
        }
      );
      if (tokens.accessToken && tokens.refreshToken) {
        localStorage.setItem("ACCESS_TOKEN", tokens.accessToken);
        localStorage.setItem("REFRESH_TOKEN", tokens.refreshToken);
        setIsAuthenticated(true);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    setIsAuthenticated(false);
  };

  return (
    <TokenContext.Provider
      value={{ isAuthenticated, logIn, logOut, reAuthenticate }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(TokenContext);

  return auth;
};

export default TokenContext;
