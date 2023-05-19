import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'
import Test from './components/Test'

import styled from "styled-components"

const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }

  color:white;
`;


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Test/>
    </Container>
  )
}

export default App
