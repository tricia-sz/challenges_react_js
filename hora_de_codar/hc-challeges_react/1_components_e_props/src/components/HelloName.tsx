interface HelloNameProps {
    name: string
}
export function HelloName({name}:HelloNameProps) {
  return (
    <p>Hello, {name}</p>
  )
}

