import styles from "./style.module.css";

interface IQuizAnswer {

}

export const QuizAnswer = () => {
  return (
    <ul className={styles.answerWrap}>
      <li className={styles.answerWrapItem}>
        <label className={styles.answerWrapItemLabel} htmlFor='answer1'>
          <input id='answer1' type='radio' name='answer' />
          Answer 1
        </label>
      </li>
      <li className={styles.answerWrapItem}>
        <label htmlFor='answer2'>
          <input id='answer2' type='radio' name='answer' />
          Answer 2
        </label>
      </li>
      <li className={styles.answerWrapItem}>
        <label>
          <input type='radio' name='answer' />
          Answer 3
        </label>
      </li>
      <li className={styles.answerWrapItem}>
        <label>
          <input type='radio' name='answer' />
          Answer 4
        </label>
      </li>
    </ul>
  )
}