import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { PokemonPage } from './03-examples/PokemonPage'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Hooks /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
