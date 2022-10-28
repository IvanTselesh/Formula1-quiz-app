import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {PostsList} from "../../components/PostList/PostsList/PostsList";
import {CircuitsList} from "../../components/CircuitsList/CircuitsList";

export const CircuitsPage = () => {
  return (
    <Container>
      <Header />
      <CircuitsList />
    </Container>
  );
};