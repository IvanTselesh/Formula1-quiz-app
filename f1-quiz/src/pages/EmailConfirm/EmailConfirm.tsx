import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {InfoTemplate} from "../../components/InfoTemplate/InfoTemplate";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {activateUser} from "../../api/registration";

export const EmailConfirm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const navToLogin = () => {
    navigate('/login')
  };

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);

  return (
    <Container>
      <Header />
      <InfoTemplate textBtn='Login' title='Success' onClick={navToLogin}>
        Email confirmed. Your registration is now completed
      </InfoTemplate>
    </Container>
  )
}