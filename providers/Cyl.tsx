import React,{useRef} from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';
import { group } from 'console';


const Cyl = () => {
    let tex=useTexture("./image.jpeg")
    const cyl = useRef<THREE.Mesh>(null!);
    useFrame((state,delta)=>{
        cyl.current.rotation.y+=delta;
    })
  return (
    <group rotation={[0,1.2,0.2]}>
    <mesh ref={cyl} >
        <cylinderGeometry args={[1.3,1.3,1.3,60,60,true]}/>
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} emissiveMap={tex} emissive={new THREE.Color("white")}       
    emissiveIntensity={0.4} // High value triggers the Bloom effect
    toneMapped={false} />
        
    </mesh>
   
    </group>
    
  )
}

export default Cyl
