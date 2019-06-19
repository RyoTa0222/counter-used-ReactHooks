import React from 'react';
import { Counter } from './Components';
import styled from 'styled-components';
function App() {
  return (
    <Container>
      <h1>Counter</h1>
      <Counter />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;