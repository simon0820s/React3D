import React from 'react'
import styled from "styled-components"
import Navbar from './Navbar'

const Section = styled.div`
  height:100vh;
  scroll-snap-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`
const Container = styled.div`
  display:flex;
  height:100vh;
  width:1400px;
  scroll-snap-align:center;
  justify-content:space-between;
`
const Left = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px;
`
const Title = styled.h1`
  font-size:74px;
`
const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`
const Line = styled.img`
  height:5px;
`
const SubTitle = styled.h2`
  color:#da4ea2;
`
const Description = styled.p`
  font-size:24px;
  color:lightgray;
`
const Button = styled.button`
  width:100px;
  padding:10px;
  background-color:#da4ea2;
  color:white;
  border:none;
  border-radius:5px;
  cursor: pointer;
`


const Rigth = styled.div`
  flex:3;
  position:relative;
`

const Img = styled.img`
  width:800px;
  height:600px;
  object-fit:contain;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform:translateY(20px)
    }
  }
`


const Hero = () => {
  return (
    <Section>

      <Navbar/>

      <Container>

        <Left>

          <Title>Think. Make. Solve</Title>

          <WhatWeDo>
            <Line src="./img/line.png"/>
            <SubTitle>What i think?</SubTitle>
          </WhatWeDo>

          <Description>I am not my mind, I am what begins after my mind ends.</Description>

          <Button>Learn More</Button>

        </Left>

        <Rigth>

          <Img src="./img/moon.png" alt="moonMan"/>

        </Rigth>

      </Container>      
    </Section>
  )
}

export default Hero