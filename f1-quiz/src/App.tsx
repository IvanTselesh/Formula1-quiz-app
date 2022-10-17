import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PostItem} from "./components/PostList/PostItem/PostItem";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {Container} from "./components/Container/Container";
import {PostsList} from "./components/PostList/PostsList/PostsList";
import {Header} from "./components/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <PostsList />
      <Input onChange={()=> {}} text={''} placeholder='search...' />
      <Button onClick={()=>{}} name='click' />
    </Container>
  );
}

export default App;
