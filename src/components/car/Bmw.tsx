"use client"

import { useGLTF } from "@react-three/drei";

const Bmw = (props : any) => {
    const {scene} = useGLTF("/car/bmw.glb")
    return (
        <mesh>
            <primitive object={scene} {...props}/>
        </mesh>
    );
};

useGLTF.preload("/car/bmw.glb")

export default Bmw;