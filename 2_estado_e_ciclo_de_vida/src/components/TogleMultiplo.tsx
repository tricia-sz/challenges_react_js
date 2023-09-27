import { useState } from "react";

export default function ToggleMultiplo() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
      <p>Você clicou {count} vezes.</p>
    </>
  );
}

