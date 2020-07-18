import React from "react";
import Greetings from "./Greetings";
import Count from "./Counter";
import MyForm from "./MyForm";
import CounterReducer from "./CounterReducer";
import Reducer from "./Reducer";

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
      <CounterReducer />
      <Reducer />
    </>
  );
};

export default App;
