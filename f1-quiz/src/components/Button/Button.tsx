import styles from "./style.module.css";

interface IButton {
  name: string
  onClick: () => void
}

export const Button = (props: IButton) => {
  return <button className={styles.button} onClick={props.onClick}>{props.name}</button>
}