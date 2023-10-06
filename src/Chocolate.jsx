import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ChocolateModel(props) {
  const { nodes, materials } = useGLTF("./room.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[5.617, 2.175, -4.162]}
        rotation={[0, 0.309, 0]}
        scale={0.032}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_6.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_7.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_8.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_9.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_10.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_11.geometry}
          material={materials.HingeMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_12.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_13.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_14.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_15.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_16.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_17.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_18.geometry}
          material={materials.Black}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.RealWood}
          position={[-1.922, 2.477, 0.055]}
          scale={[0.771, 0.771, 1.139]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.White}
          position={[-1.922, 2.477, 0.375]}
          scale={0.771}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.White}
          position={[-1.922, 2.477, 0.375]}
          scale={0.771}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.014}>
        <group position={[-0.001, -0.001, -0.001]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Black}
            position={[441.345, 176.738, 9.584]}
            rotation={[0, 0, -1.989]}
            scale={2.388}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.White}
            position={[441.345, 176.738, 9.584]}
            rotation={[0, 0, -1.989]}
            scale={2.388}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.RealWood}
            position={[441.345, 176.738, 9.584]}
            rotation={[0, 0, -1.989]}
            scale={2.388}
          />
        </group>
      </group>
      <group position={[4.647, 2.287, -4.159]} scale={0.355}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003.geometry}
          material={materials.Pot}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_1.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_2.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_3.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_4.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_5.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_6.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003_7.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group
        position={[0, 2.77, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 19.813, 99.3]}
            rotation={[0, 0, -Math.PI]}
            scale={[15.773, 15.773, 10.819]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lamp_Lamp_0.geometry}
              material={materials.Lamp}
              position={[-209.995, 17.434, -188.227]}
            />
          </group>
        </group>
      </group>
      <group position={[2.147, 2.8, 2.603]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-363.54, 186.023, -358.204]}
            rotation={[1.571, 1.57, 0]}
            scale={[-26.859, -26.705, -1.734]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011__0.geometry}
              material={materials.RealWood}
              position={[-1.265, 8.107, 25.01]}
              scale={2.847}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.RealWood}
        position={[3.039, 0.002, 0.025]}
        scale={[5, 0.1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.RealWood}
        position={[3.023, -0.426, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.WallColor}
        position={[3.039, 3.902, -5.15]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.175, 4, 5.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.WallColor}
        position={[-2.136, 3.902, 0.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5, 4, 0.175]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.RealWood}
        position={[6.056, 2.077, -4.176]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.WallColor}
        position={[8.214, 3.902, 0.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5, 4, 0.175]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.White}
        position={[-1.942, 0.302, 0.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5, 0.15, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.White}
        position={[3.039, 0.302, -4.959]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[5, 0.15, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.White}
        position={[8.023, 0.302, 0.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5, 0.15, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.RealWood}
        position={[5.131, 5.057, -4.715]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.RealWood}
        position={[4.025, 6.105, -4.715]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={nodes.Cube041.material}
        position={[4.657, 1.507, -4.481]}
        rotation={[Math.PI / 4, 0, 0]}
        scale={[0.075, 0.625, 0.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={nodes.Cube056.material}
        position={[7.363, 1.507, -4.481]}
        rotation={[Math.PI / 4, 0, 0]}
        scale={[0.075, 0.625, 0.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials.RealWood}
        position={[-1.886, 1.15, -2.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials.RealWood}
        position={[2.814, 4.858, -5.124]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={1.044}
      />
      <group position={[6.901, 4.207, -4.718]} scale={2.624}>
        <group
          position={[-0.388, 0.106, -0.007]}
          rotation={[1.573, -0.45, -1.571]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062_1.geometry}
            material={materials.WallColor}
          />
        </group>
        <group
          position={[-0.971, 0.472, -0.007]}
          rotation={[1.573, -0.45, -1.571]}
          scale={0.688}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube137.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube137_1.geometry}
            material={materials.WallColor}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./room.glb");
