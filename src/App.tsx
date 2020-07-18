import React from "react";
import Greetings from "./Greetings";
import Count from "./Counter";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <>
      <Greetings name="Poburi" onClick={onClick} />
      <Count />
    </>
  );
};

export default App;
