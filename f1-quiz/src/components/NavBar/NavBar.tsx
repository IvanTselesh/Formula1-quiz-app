import styles from "./style.module.css";
import {DarkModeToggle} from "../DarkModeToggle/DarkModeToggle";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../App";

export const NavBar = () => {
  const { isDark, setIsDark } = useContext(Context);

  const handleOnChange = () => {
    setIsDark(!isDark)
  };

  return (
    <div className={`${styles.navBar} ${isDark ? styles.navBarDark : styles.navBarLight}`}>
      <ul className={styles.navBarList}>
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
          <Link className={styles.links} to='/quiz'>Quiz</Link>
        </li>
      </ul>
      <DarkModeToggle onChange={handleOnChange} inputChecked={isDark} />
  </div>
  )
};