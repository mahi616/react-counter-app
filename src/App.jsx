import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(3)
  const [reached, setreached] = useState("")

  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      if (counter <= 0) {
        setreached("")
      }
    }
    else {
      setreached("Reached")
    }
  }
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      if (counter <= 20) {
        setreached("")
      }
    }
    else {
      setreached("Reached")
    }
  }
  return (
    <>
      <h1>Counter_App</h1>
      <p>Counter: {counter}</p>
      <p style={{ color: 'red' }}>{reached}</p>

      <button onClick={increment}>Make counter + 1</button><br /><br />
      <button onClick={decrement}>Make counter - 1</button>
    </>
  )
}

export default App
