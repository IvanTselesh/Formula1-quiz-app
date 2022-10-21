import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {QuizQuestion} from "../../components/QuizQuestion/QuizQuestion";
import {QuizAnswer} from "../../components/QuizAnswer/QuizAnswer";

export const QuizPage = () => {
  return (
    <Container>
      <Header />
      <QuizQuestion />
      <QuizAnswer />
    </Container>
  )
}