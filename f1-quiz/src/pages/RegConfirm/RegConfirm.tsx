import {Container} from "../../components/Container/Container";
import {InfoTemplate} from "../../components/InfoTemplate/InfoTemplate";
import {Header} from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";

export const RegConfirm = () => {
  const navigate = useNavigate();

  const returnOnClick = () => {
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <InfoTemplate textBtn='Home' title='Registration Confirmation' onClick={returnOnClick}>
        Please activate your account with the activation link in the email test@gmail.com. Please check your email
      </InfoTemplate>
    </Container>
  )
}