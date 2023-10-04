import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}

export default Counter