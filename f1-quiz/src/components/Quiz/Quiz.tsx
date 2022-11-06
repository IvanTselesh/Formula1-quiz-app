import styles from "./style.module.css";
import {Button} from "../Button/Button";
import {IQuestions, questions} from "../../api/questions";
import {QuizButton} from "../QuizButton/QuizButton";
import {useState} from "react";
import {useNavigate} from "react-router-dom";



export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = (isCorrect: boolean) => {
    if(isCorrect) {
      setScore(score + 1);
    };

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  };

  const returnOnClick = () => {
    navigate('/');
  }

  return (
    <>
      {showScore ?
        <div className={styles.score}>
          <p>Your result is {score} from 10</p>
          <Button name="Return to main" onClick={returnOnClick} />
        </div> :
        <>
          <div className={styles.questionWrap}>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <ul className={styles.answerWrap}>
            {questions[currentQuestion].answers.map((item: any) => (<QuizButton onClick={() => handleOnClick(item.isCorrect)} name={item.answerText} />))}
          </ul>
        </>
      }
    </>
  )
};
