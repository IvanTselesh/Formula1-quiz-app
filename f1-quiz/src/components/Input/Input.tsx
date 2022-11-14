import styles from "./style.module.css";
import {ChangeEventHandler} from "react";

interface IInput {
  text: string
  placeholder?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  type?: string
};

export const Input = (props: IInput) => {

  return <input
    className={styles.input}
    value={props.text}
    onChange={props.onChange}
  />
};