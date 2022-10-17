import styles from "./style.module.css";

interface IUser {
  name: string
};

export const User = (props: IUser) => {
  const init = props.name.split(' ')

  return <div className={styles.userWrap}>
    <div className={styles.userWrapIcon}>
      {init[0][0].toUpperCase()}
      {init[1] ? init[1][0].toUpperCase() : ''}
    </div>
    <div className={styles.userWrapContent}>
      <p>{props.name}</p>
    </div>
  </div>
}