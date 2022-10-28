import {User} from "../User/User";
import burger from "./menu-burger.svg";
import styles from "./style.module.css";
import {useContext, useState} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Context} from "../../App";
import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  const { isDark, user } = useContext(Context);
  const navigate = useNavigate();

  const openNavBar = () => {
    setIsNavBar(!isNavBar);
  };

  const handleOnLogin = () => {
    navigate('/login');
  };

  const handleOnSignUp = () => {
    navigate('/registration');
  };

  return <>
    <nav className={styles.nav}>
      <button className={styles.navButton} onClick={openNavBar}>
        <img className={isDark ? styles.navButtonImgDark : styles.navButtonImgLight} src={burger} />
      </button>
      {user ?
        <User name={user.username} /> :
        <div>
          <Button onClick={handleOnLogin} name='Log In' />
          <Button onClick={handleOnSignUp} name='Sign Up' />
        </div>
      }
    </nav>
    {isNavBar ? <NavBar /> : null}
  </>
}