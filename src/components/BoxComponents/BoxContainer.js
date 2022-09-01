import Box from '../BoxComponents/Box'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry'

export default function BoxContainer() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault fov={30} position={[2, 0, 3]} />
        <OrbitControls enableZoom={false} enableRotate={true} />
        <ambientLight intensity={0.5}></ambientLight>
        <Box></Box>
      </Canvas>
    </>
  )
}
