import React from "react";
import Greetings from "./Greetings";
import Count from "./Counter";
import MyForm from "./MyForm";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="Poburi" onClick={onClick} />
      <Count />
      <MyForm onSubmit={onSubmit} />
    </>
  );
};

export default App;
