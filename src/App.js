import { useState } from "react"

function App() {
  const [state, setState] = useState(0)

  const increment = () => setState(prev => prev + 1)

  return (
    <div className="App">
      <h1 style={{fontSize: 70, color: "#333"}}>value = {state}</h1>
      <button style={{background: '#ddd', color: '#eee'}} onClick={increment}>Increment counter</button>
    </div>
  )
}

export default App
