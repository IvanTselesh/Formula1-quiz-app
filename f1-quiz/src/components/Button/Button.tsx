import styles from "./style.module.css";
import {useContext} from "react";
import {Context} from "../../App";

interface IButton {
  name: string
  onClick: () => void
}

export const Button = (props: IButton) => {
  const { isDark } = useContext(Context);

  const getBtnColor = (isDark: boolean) => {
    return `${isDark ? styles.darkBtn : styles.lightBtn}`
  };

  return <button className={`${styles.button} ${getBtnColor(isDark)}`} onClick={props.onClick}>{props.name}</button>
}