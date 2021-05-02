import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import storage from "local-storage-fallback";
import {
  Header,
  HeaderContainer,
  HeaderBlockItem,
  HeaderLogoText,
  HeaderSmallLogoText,
  HeaderThemeModeButtom,
} from "./Header/Header";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LockIcon from "@material-ui/icons/Lock";

// initial theme object for our theme state
const initialTheme = {
  mode: "dark",
  darkModeColor: "black",
  lightModeColor: "white",
};

// global style values like the body etc
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode == "dark"
        ? props.theme.darkModeColor
        : props.theme.lightModeColor};
    color:${(props) =>
      props.theme.mode == "dark"
        ? props.theme.lightModeColor
        : props.theme.darkModeColor};
  }
`;

function App() {
  // this can go either outside or inside the funciton app
  // it just has to be before the useState
  const getInitialTheme = () => {
    let storageTheme = storage.getItem("appTheme");
    return storageTheme ? JSON.parse(storageTheme) : initialTheme;
  };

  // usestate will call the get initial func once during the intial load render
  // so we can skip the use effect here in lieu of this
  const [theme, setTheme] = useState(getInitialTheme);

  const setAppTheme = () => {
    let chosenTheme =
      theme.mode == "dark"
        ? { ...theme, mode: "light" }
        : { ...theme, mode: "dark" };

    storage.setItem("appTheme", JSON.stringify(chosenTheme));

    setTheme(chosenTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <HeaderContainer>
          <Header>
            <HeaderBlockItem>
              <OfflineBoltIcon></OfflineBoltIcon>
              <HeaderLogoText>EnergyBillCruncher</HeaderLogoText>
            </HeaderBlockItem>
            <HeaderBlockItem>
              <LockIcon></LockIcon>
              <HeaderSmallLogoText>Secure Form</HeaderSmallLogoText>
              <HeaderThemeModeButtom onClick={() => setAppTheme()}>
                Toggle Theme
              </HeaderThemeModeButtom>
            </HeaderBlockItem>
          </Header>
        </HeaderContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
