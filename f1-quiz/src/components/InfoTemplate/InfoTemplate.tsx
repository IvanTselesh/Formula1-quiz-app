import {Button} from "../Button/Button";
import {ReactNode} from "react";
import styles from "./style.module.css";

interface IProps {
  children: ReactNode
  textBtn: string
  title: string
  onClick: () => void
}

export const InfoTemplate = (props: IProps) => {
  return (
    <div className={styles.infoTemplate}>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      <Button name={props.textBtn} onClick={props.onClick} />
    </div>
  )
}