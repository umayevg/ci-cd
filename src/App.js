import { useState } from "react"
import "./App.css"

function App() {
  const [state, setState] = useState(0)

  const increment = () => setState(prev => prev + 1)

  return (
    <div className="App">
      <h1>value = {state}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
