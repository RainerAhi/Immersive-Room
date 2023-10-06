import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture } from '@react-three/drei'
import * as THREE from "three"
export default function Portal() {

    const map = useTexture("./t7.jpg")

    return (
        <>
            <mesh position={ [ 0.5, 4.2, -5.3 ]  }   >
                <planeGeometry args={ [ 4, 6, 4 ] } />
                <MeshPortalMaterial>
                    <ambientLight intensity={ 0.5 } />
                    <Environment preset='sunset' />
                    <mesh rotation-y={ Math.PI / 2 } >
                        <sphereGeometry args={ [ 6, 32, 32 ] } />
                        <meshStandardMaterial map={map} side={ THREE.BackSide } />
                    </mesh>
                </MeshPortalMaterial>
            </mesh>
        </>
    )
}