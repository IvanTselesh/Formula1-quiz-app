import {User} from "../User/User";
import burger from "./menu-burger.svg";
import styles from "./style.module.css";
import {useState} from "react";
import {NavBar} from "../NavBar/NavBar";

export const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);

  const openNavBar = () => {
    setIsNavBar(!isNavBar);
  };


  return <>
    <nav className={styles.nav}>
      <button className={styles.navButton} onClick={openNavBar}>
        <img className={styles.navButtonImg} src={burger} />
      </button>
      <User name='Michael Schumacher' />
    </nav>
    {isNavBar ? <NavBar /> : null}
  </>
}