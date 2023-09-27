interface ProfileProps {
    name: string
    age: number
    height: number
    job: string
}
export function Profile({name, age, height,job}:ProfileProps) {
  return (
   <>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Altura: {height}</p>
      <p>Profissão: {job}</p>
   </>
  )
}
