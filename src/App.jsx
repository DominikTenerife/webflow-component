import { useState } from 'react'

import './App.css'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>This is Dominik's Vite + React app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <img src={"https://myarchipelago.es/wp-content/uploads/2024/09/IMG_1007-768x1024.jpg"} alt="photo of a cliff in Tenerife" className="image-large"/>
      
    </>
  )
}

export default App
