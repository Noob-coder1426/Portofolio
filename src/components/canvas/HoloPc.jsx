import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from 
"@react-three/drei"

import CanvasLoader from "../CanvasLoader"

import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../../../sizes"


const HoloPc = () => {

  const isSmall = useMediaQuery({maxWidth: 480})
  const isMobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 800})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

const computers = useGLTF ('../models/scene.gltf')
  return (
    <mesh >
      <hemisphereLight intensity={1}
      groundColor="black" />
      <pointLight intensity={2}/>
      <primitive 
      object={computers.scene}
      scale={sizes.modelScale}
      position={sizes.modelPosition}
      rotation={[-0.10, 0, 0]}/>
    </mesh>
  )
}

const ModelsCanvas = () => {
  return(
    <Canvas className="w-full h-full cursor-grab"
    frameloop="demand"
    shadows
    camera={{position: [10,3,5], fov: 25,}}
    gl={{preserveDrawingBuffer: true}}>

      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom= {false}
      enablePan={false}
      autoRotate rotateSpeed={1}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}/>
      <HoloPc/>
      </Suspense>

      <Preload all/>

    </Canvas>
  )
}
export default ModelsCanvas