import styles from "./style.module.css";
import image from "./123.jpg";

interface IPost {
  image?: string
  name: string
  surname?: string
  date: string
  nationality: string
}

export const PostItem = (props: IPost) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrap}>
        <img className={styles.cardImgWrapContent} src={image} />
      </div>
      <p className={styles.cardContext}>{props.name} {props.surname}</p>
      <p className={styles.cardContext}></p>
      <p className={styles.cardContext}>{props.date}</p>
      <p className={styles.cardContext}>{props.nationality}</p>
    </div>
  )
};