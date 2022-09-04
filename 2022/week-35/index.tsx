import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/iMHlrjk878cmG4P3/scene.splinecode'
  );
  return (
    <>
      <color attach='background' args={['#4b4d52']} />
      <group {...props} dispose={null}>
        <mesh
          name='Cube'
          geometry={nodes.Cube.geometry}
          material={materials['Cube Material']}
          castShadow
          receiveShadow
        />
        <directionalLight
          name='Directional Light'
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name='1'
          makeDefault={true}
          zoom={0.05}
          far={100000}
          near={-100000}
          position={[845.26, 331.97, 418.73]}
          rotation={[-0.67, 1.01, 0.59]}
        />
        <hemisphereLight
          name='Default Ambient Light'
          intensity={0.75}
          color='#eaeaea'
          position={[0, 1, 0]}
        />
      </group>
    </>
  );
}
