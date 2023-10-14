import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
 <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>

<Card username="Sagar" btnText="click me"/>
<Card username="Bhushan" btnText="visit me"/>
    </>
  )
}

export default App
