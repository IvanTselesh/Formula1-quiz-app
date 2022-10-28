import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {ConstructorList} from "../../components/ConstructorList/ConstructorList";

export const ConstructorsPage = () => {
  return (
    <Container>
      <Header/>
      <ConstructorList />
    </Container>
  );
};