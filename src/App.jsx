import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import './components/card.css'

const url = 'https://rickandmortyapi.com/api/character'

function App() {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
      });
  }, [])

  console.log('characters', characters);

  return (
    <>
      <h1>React <br></br>Ruta N Pragma</h1>
      {
      characters?.map((cha)=>(
        <Card key={cha.id} char={cha}></Card>
      ))}
    </>
  )
}

export default App
