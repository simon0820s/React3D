import { RenderTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Container=styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align:center;

`

const Test = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                
            </mesh>
        </Canvas>
    </Container>
  )
}

export default Test