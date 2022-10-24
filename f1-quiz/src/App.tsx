import React, {createContext, useContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PostItem} from "./components/PostList/PostItem/PostItem";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Container} from "./components/Container/Container";
import {PostsList} from "./components/PostList/PostsList/PostsList";
import {Header} from "./components/Header/Header";
import {DarkModeToggle} from "./components/DarkModeToggle/DarkModeToggle";
import {SectionList} from "./components/SectionList/SectionList";
import {MainPage} from "./pages/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";
import {RootRouter} from "./router/router";
import {EmailConfirm} from "./pages/EmailConfirm/EmailConfirm";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {QuizAnswer} from "./components/QuizAnswer/QuizAnswer";
import {QuizQuestion} from "./components/QuizQuestion/QuizQuestion";
import {QuizPage} from "./pages/QuizPage/QuizPage";
import {Loader} from "./components/Loader/Loader";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({
  isDark: false,
  setIsDark: () => {},
});

const getTheme = () => {
  const isDark = localStorage.getItem('isDark');

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
    <Context.Provider value={{isDark: isDark, setIsDark: setIsDark}}>
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
