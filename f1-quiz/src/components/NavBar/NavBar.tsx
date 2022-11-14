import styles from "./style.module.css";
import {DarkModeToggle} from "../DarkModeToggle/DarkModeToggle";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../App";
import {Button} from "../Button/Button";

export const NavBar = () => {
  const { isDark, setIsDark, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleOnChange = () => {
    setIsDark(!isDark)
  };

  const handleOnClick = () => {
    navigate("/");
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className={`${styles.navBar} ${isDark ? styles.navBarDark : styles.navBarLight}`}>
      <ul className={styles.navBarList}>
        <li>
          <Link className={styles.links} to='/'>Main</Link>
        </li>
        <li>
          <Link className={styles.links} to='/drivers'>Drivers</Link>
        </li>
        <li>
          <Link className={styles.links} to='/constructors'>Constructors</Link>
        </li>
        <li>
          <Link className={styles.links} to='/circuits'>Circuits</Link>
        </li>
        <li>
          <Link className={styles.links} to='/quiz' >Quiz</Link>
        </li>
        <li>
          {user ? <Link className={styles.links} to='/' onClick={handleOnClick}>Logout</Link> : null}
        </li>
      </ul>
      <DarkModeToggle onChange={handleOnChange} inputChecked={isDark} />
  </div>
  )
};