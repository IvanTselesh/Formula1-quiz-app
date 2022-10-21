import styles from "./style.module.css";
import image from "./123.jpg";
import {useContext} from "react";
import {Context} from "../../../App";

interface IPost {
  image?: string
  name: string
  surname?: string
  date?: string
  nationality?: string
  description?: string
}

export const PostItem = (props: IPost) => {
  const { isDark } = useContext(Context);

  return (
    <div className={`${styles.card} ${isDark ? styles.darkCard : styles.lightCard}`}>
      <div className={styles.cardImgWrap}>
        <img className={styles.cardImgWrapContent} src={props.image} />
      </div>
      <p className={`${styles.cardContext} ${styles.header}`}>{props.name} {props.surname}</p>
      <p className={styles.cardContext}>{props.date} {props.description}</p>
      <p className={styles.cardContext}>{props.nationality}</p>
    </div>
  )
};