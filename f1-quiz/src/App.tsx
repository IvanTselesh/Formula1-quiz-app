import React, {createContext, useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./router/router";
import {IUser} from "./components/types/auth";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

const getTheme = () => {
  const isDark = localStorage.getItem('isDark');
  const [user, setUser] = useState<IUser | null>(null);

  if(isDark === 'true') {
    return true;
  };

  return false;
};

function App() {
  const [isDark, setIsDark] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('isDark', String(isDark))
  }, [isDark])

  return (
    <Context.Provider value={{isDark: isDark, setIsDark: setIsDark, user: null, setUser: (value) => {}}}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
