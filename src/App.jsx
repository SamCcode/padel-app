import { useState } from 'react'
import './App.css'
import AddPlayers from './Components/AddPlayers'
import PrimaryButton from './Components/PrimaryButton'

function App() {
  const [startButton, setStartButton] = useState(false)
  const [clickedButton, setClickedButton] = useState()
    
 
  return (
    <div className ="App">
      <header>
      <h1>Padel maniac!</h1>
      </header>
    {clickedButton === "startGame" ? (
      <>
        <PrimaryButton title="Regular game" action={() => {setClickedButton("regular")}} />
        <PrimaryButton title="Americano" action={() => {setClickedButton("americano")}} />
      </>
    ) : clickedButton === "americano" ? (
      <AddPlayers type ="americano" />
    ) : clickedButton === "regular" ? (
      <AddPlayers type ="regular" />
    ) : (
      <PrimaryButton title="Start a new game" action={() => {setClickedButton("startGame")}} />
    )}
      
    </div>
  )
}

export default App
