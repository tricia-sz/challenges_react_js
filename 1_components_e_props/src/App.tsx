import "./App.css";
import Family from "./components/Family";
import { HelloName } from "./components/HelloName";
import { HelloWorld } from "./components/HelloWorld";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";


function App() {
  const members = [
    { name: "John", age: 30, job: "Advogado" },
    { name: "Jane", age: 28, job: "Engenheira" },
    { name: "Paul", age: 45, job: "Mecânico" },
  ];

  return (
    <>
      <h2>1 - Criando um Componente Simples</h2>
      <HelloWorld />
      <h2>2 - Usando props</h2>
      <HelloName name="Patrícia" />
      <h2>3 - Múltiplas props</h2>
      <Profile name="João" age={30} job="Programador" />
      <h2>4 - Composição de componentes</h2>
      <Family members={members} />
      <h2>5 - Componente de Classe</h2>
      <ProfileClass name={"Rodrigo"} age={45} job={"Lavrador"} />

    </>
  );
}

export default App;