import {User} from "../User/User";
import burger from "./menu-burger.svg";
import styles from "./style.module.css";
import {useContext, useState} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Context} from "../../App";

export const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  const { isDark } = useContext(Context);

  const openNavBar = () => {
    setIsNavBar(!isNavBar);
  };

  return <>
    <nav className={styles.nav}>
      <button className={styles.navButton} onClick={openNavBar}>
        <img className={isDark ? styles.navButtonImgDark : styles.navButtonImgLight} src={burger} />
      </button>
      <User name='Michael Schumacher' />
    </nav>
    {isNavBar ? <NavBar /> : null}
  </>
}