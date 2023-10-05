import { useState } from "react"

function Togle() {
  const [isOn, setIsOn] = useState(true)

  return (
    <>
     <button onClick={() => {setIsOn(!isOn)}}>{isOn ? "ON" : "OFF"}</button>
    </>
  )
}

export default Togle