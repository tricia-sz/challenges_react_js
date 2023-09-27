import Clock from "./components/Clock"
import Togle from "./components/Togle"
import TogleMultiplo from "./components/TogleMultiplo"

function App() {

  return (
    <>
      <h2>Challenge 1: Usando Estado</h2>
      <Togle />
      <h2>Challenge 2: Multiplos Estado</h2>
      <TogleMultiplo />
      <h2>Challenge 3: Relogio em tempo real</h2>
      <Clock />

    </>
  )
}

export default App
