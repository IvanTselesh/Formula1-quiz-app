import {Container} from "../../components/Container/Container";
import {background} from "../../assets/assets";
import {Link, useNavigate} from "react-router-dom";
import styles from "./style.module.css";
import {Button} from "../../components/Button/Button";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleOnChange = () => {
    navigate('/')
  };

  return (
    <Container>
      <div className={styles.errorWrap}>
        <h1>OOPS! You`ve missed, you`d better to return to main page and try again</h1>
        <Button name='Back home' onClick={handleOnChange} />
        <div className={styles.background}>
          <img className={styles.backgroundImg} src={background} />
      </div>
      </div>
    </Container>
  );
};