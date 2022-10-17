import styles from "./style.module.css";
import {ReactNode} from "react";

interface IContainer {
  children: ReactNode
};

export const Container = ({children}: IContainer) => {
  return <div className={styles.container}>{children}</div>
};