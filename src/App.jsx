
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import quotes from './json/quotes.json'

const arrayColor = [
  '#6B4A0A', '#304377', '#A3154A' , '#f0e130' , '	#909090' , '#00008B'
, '#FF8C00' , '#ADD8E6' , '#FF0000']

function App() {

  const createNumberRandom= array => {

  return Math.floor (Math.random() * array.length)
}

const getElementRandom = array => {
  const i = createNumberRandom(array) 
  return array[i]
}


const [userRandom, setUserRandom] = useState(getElementRandom(quotes))
const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColor))


const clickButton = () => {
  setUserRandom(getElementRandom(quotes))
  setColorRandom(getElementRandom(arrayColor))

  
}


const appStyle = {
  backgroundColor: colorRandom
}


  return (
    <div style={appStyle} className="App">
      <Card
        userRandom={userRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />  



    </div>
  )
}

export default App