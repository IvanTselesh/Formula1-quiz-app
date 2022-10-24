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
      <h1>OOPS! He missed and you`re too</h1>
      <Button name='Back home' onClick={handleOnChange} />
      <div className={styles.background}>
        <img className={styles.backgroundImg} src={background} />
      </div>
    </Container>
  );
};