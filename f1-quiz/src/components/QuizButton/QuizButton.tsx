import styles from "./style.module.css";

interface IQuizButton {
  onClick: () => void
  name: string
}

export const QuizButton = (props: IQuizButton) => {
  return (
    <button className={styles.quizButton} onClick={props.onClick}>{props.name}</button>
  )
}