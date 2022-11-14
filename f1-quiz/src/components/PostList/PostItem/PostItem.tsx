import styles from "./style.module.css";
import {useContext} from "react";
import {Context} from "../../../App";
import {useNavigate} from "react-router-dom";

export interface IPost {
  logo?: string;
  image: string | undefined
  name: string
  date?: string
  nationality?: string
  description?: string
  id?: number
  birthdate?: string
  onClick?: () => void
}

export const PostItem = (props: IPost) => {
  const { isDark } = useContext(Context);

  return (
    <div key={props.id} className={`${styles.card} ${isDark ? styles.darkCard : styles.lightCard}`} onClick={props.onClick}>
      <div className={styles.cardImgWrap}>
        <img className={styles.cardImgWrapContent} src={props.image} />
      </div>
      <p className={`${styles.cardContext} ${styles.header}`}>{props.name}</p>
      {props.date || props.description ?
        <p className={styles.cardContext}>{props.date} {props.description}</p> :
        null
      }
      {props.nationality ? <p className={styles.cardContext}>{props.nationality}</p> : null}
    </div>
  )
};