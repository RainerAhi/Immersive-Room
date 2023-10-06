import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows } from '@react-three/drei'
import { easing } from 'maath'
import CustomEffects from './Effects'
import ChocolateModel from './Chocolate'
import Portal from './Portal'
import * as THREE from "three"

export default function App() {

  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  return (
    <>
      <color attach="background" args={['#F8B195']} />
      <SoftShadows intensity={ 20 } />
      <ambientLight intensity={ 0 } />
      <CameraRig>
        <directionalLight castShadow position={[2, 8, 15]} shadow-mapSize={[1024, 1024]} shadow-normalBias={ 0.04 } intensity={ 0.1 } >
          <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
        </directionalLight>
        <group position={[-4.5, -4, -3]} rotation-y={ Math.PI / 6 } >
          <Center top>
                <ChocolateModel />
                <mesh rotation-x={ Math.PI / -2 }  position={ [ 0, 0, 0 ] } receiveShadow >
                  <planeGeometry args={ [ 15, 15, 1 ] } />
                  <meshStandardMaterial color={ "#F8B195" } />
                </mesh>
          </Center>
          <Portal />
        </group>
        </CameraRig>
      <OrbitControls target={[0, 0, 0]} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ false } enableRotate={ false } />
      <Environment castShadow >
        <Lightformer intensity={10} color={'#fc9248'} rotation-y={Math.PI / 2} position={[7, 1, 1]} scale={[20, 1, 1]} castShadow />
        <Lightformer intensity={15} rotation-y={Math.PI / 2} position={[-5, 4, -1]} scale={[20, 0.9, 1]} castShadow  />
        <Lightformer intensity={15} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 1, 1]} castShadow  />
      </Environment>

      <CustomEffects />
      </>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 3, 0], 0.5, delta)
  })
  return <group ref={group}>{children}</group>
}

