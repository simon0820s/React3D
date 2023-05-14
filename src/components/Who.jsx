import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  height:100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:center;
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
  
`
const Title = styled.h1`
  font-size:74px;
`
const Rigth = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px;
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


const Who = () => {
  return (
    <Section>

      <Container>

        <Left>
          {/*3D model*/}          
        </Left>

        <Rigth>

        <Title>Think. Make. Solve</Title>

          <WhatWeDo>
            <Line src="./img/line.png"/>
            <SubTitle>What i think?</SubTitle>
          </WhatWeDo>

          <Description>the road to hell is paved with good intentions</Description>

          <Button>Learn More</Button>

        </Rigth>

      </Container>      
    </Section>
  )
}

export default Who