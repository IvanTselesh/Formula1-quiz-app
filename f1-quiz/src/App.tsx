import React, {createContext, useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./router/router";
import {IUser} from "./components/types/auth";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import {getUser} from "./api/registration";

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

const access = localStorage.getItem('access');
const getTheme = () => {
  const isDark = localStorage.getItem('isDark');

  if(isDark === 'true') {
    return true;
  };

  return false;
};

function App() {
  const [isDark, setIsDark] = useState(getTheme());
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] =useState(!access);

  useEffect(() => {
    let isOk = true;
    const access = localStorage.getItem('access');

    if(access) {
      getUser()
        .then((response) => {
          if(response.ok) {
            isOk = true
          } else {
            isOk = false
          }
          return response.json();
        })
        .then((json) => {
          if(isOk) {
            setUser(json);
          }
        })
        .finally(() => {
          setIsReady(true)
        })
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('isDark', String(isDark))
  }, [isDark])

  return (
    <BrowserRouter>
      <Context.Provider value={{isDark: isDark, setIsDark: setIsDark, user, setUser}}>
        {isReady ? <RootRouter /> : null}
        <NotificationContainer />
      </Context.Provider>

    </BrowserRouter>
  );
}

export default App;
