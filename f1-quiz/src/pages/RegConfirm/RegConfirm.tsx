import {Container} from "../../components/Container/Container";
import {InfoTemplate} from "../../components/InfoTemplate/InfoTemplate";
import {Header} from "../../components/Header/Header";

export const RegConfirm = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate textBtn='Home' title='Registration Confirmation' onClick={() => {}}>
        Please activate your account with the activation link in the email test@gmail.com. Please check your email
      </InfoTemplate>
    </Container>
  )
}