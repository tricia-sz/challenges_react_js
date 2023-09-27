import './App.css'
import { HelloName } from './components/HelloName'
import { HelloWorld } from './components/HelloWorld'

function App() {
  return (
   <>
    <h2>1 - Criando um component Simples</h2>
    <HelloWorld />
    <h2>2 - Usando props na solução</h2>
    <HelloName name='Trícia'/>
   </>
  )
}

export default App