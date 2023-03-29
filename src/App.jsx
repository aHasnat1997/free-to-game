import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Games from './components/Games'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Banner />
      <Games></Games>
    </div>
  )
}

export default App
