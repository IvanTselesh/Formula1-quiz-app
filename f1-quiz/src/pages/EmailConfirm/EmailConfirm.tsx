import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {InfoTemplate} from "../../components/InfoTemplate/InfoTemplate";

export const EmailConfirm = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate textBtn='Login' title='Success' onClick={() => {}}>
        Email confirmed. Your registration is now completed
      </InfoTemplate>
    </Container>
  )
}