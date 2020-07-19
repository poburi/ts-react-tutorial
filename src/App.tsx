import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Greetings from "./Greetings";
import Count from "./Counter";
import MyForm from "./MyForm";
import CounterReducer from "./CounterReducer";
import Reducer from "./Reducer";
import Menu from "./Menu";
import Todo from "./Todo";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { TodosContextProvider } from "./contexts/TodosContext";

const MoreCSS = createGlobalStyle`
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/s/materialicons/v51/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2") format('woff2');
}

html,
body,
#root {
  height: 100%;
  touch-action: manipulation;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") || "dark") as "light" | "dark"
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <MoreCSS></MoreCSS>
        <Layout>
          <Nav>
            <Route>
              <Menu />
            </Route>
          </Nav>
          <Contents>
            <Route exact path="/" />
            <Route path="/study">
              <Greetings name="Poburi" onClick={onClick} />
              <Count />
              <MyForm onSubmit={onSubmit} />
              <CounterReducer />
              <Reducer />
            </Route>
            <TodosContextProvider>
              <Route path="/todolist" component={Todo} />
            </TodosContextProvider>
          </Contents>
        </Layout>
      </ThemeProvider>
    </>
  );
};

const Layout = styled.div`
  display: flex;
`;
const Nav = styled.div`
  width: 200px;
  flex: none;
`;

const Contents = styled.div`
  flex: 1 0 auto;
`;

export default App;
