import React from 'react'
import {Canvas} from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Cyl from './Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const CircuarAnimation = () => {
 
  return (
    <Canvas camera={{fov:35}} shadows
  gl={{ antialias: true }}>
      <OrbitControls enableZoom={false}/>
      <ambientLight/>
      <Cyl/>
  
       <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={1.2} // The bloom intensity.
        luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
   
        />
        <ToneMapping adaptive/>
       </EffectComposer>
         
         <directionalLight
         castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
/>
    </Canvas>
  )
}

export default CircuarAnimation

