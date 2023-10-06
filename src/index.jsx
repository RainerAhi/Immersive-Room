import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Overlay from './Overlay'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
    <Canvas shadows camera={{ position: [3, 0.8, 5], fov: 35 }} >
    <App />
    </Canvas>
  </>
)

