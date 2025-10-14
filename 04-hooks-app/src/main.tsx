import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Hooks /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
)
