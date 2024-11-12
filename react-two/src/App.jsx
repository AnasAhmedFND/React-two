import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Servics from './components/service'
import Cars from './components/Cars'
import Featured from './components/Featured'
import Fcars from './components/Fcars'
import Client from './components/Client'
import Textimg from './components/Textimg'
import Futtar from './components/Futtar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Card/>
      <Servics/>
      <Cars/>
      <Featured/>
      <Fcars />
      <Fcars />
      <Client/>
      <Textimg/>
      <Futtar/>
     
    </>
  )
}

export default App
