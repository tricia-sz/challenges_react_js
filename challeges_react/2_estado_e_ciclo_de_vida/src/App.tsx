import Clock from "./components/Clock"
import DataFetcher from "./components/DataFetcher"
import TodoList from "./components/TodoList"
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
      <h2>Challenge 4: Todo List</h2>
      <TodoList />
      <h2>Challenge 5: Simulando Requisicao API</h2>
      <DataFetcher />


    </>
  )
}

export default App
