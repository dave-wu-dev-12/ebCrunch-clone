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
import {
  ZipcodeContainer,
  WelcomeTextContainer,
  WelcomeTextHeader,
  WelcomeTextInstruction,
  ZipCodeFormContainer,
  ZipCodeFormHeader,
  ZipCodeFormSubHeader,
  ZipCodeFormSubmit,
  ZipCodeForm,
} from "./Zipcode/Zipcode";

import { GenericFlexColumnContianer } from "./GenericComponents";
import { Footer, FooterLink, FooterBackgroundImage } from "./Footer/Footer";
import {
  PowerbillContainer,
  PowerbillHeader,
  PowerbillButton,
  PowerbillSubHeader,
} from "./PowerbillSlider/PowerbillSlider";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import { VIEWS } from "./Assets/Views";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

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
  const classes = useStyles();

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

  const [zipCode, setZipCode] = useState("");
  const [viewToShow, setViewToShow] = useState(VIEWS.zipcode);
  const [powerBillValue, setPowerBillValue] = useState("0");

  const numbersOnly = (value) => {
    let reg = /^\d+$/;
    if (reg.test(value)) setZipCode(value);
  };

  const submitZipcode = () => {
    setViewToShow(VIEWS.powerBill);
  };

  const valuetext = (value) => {
    let powerBillvalue = "";
    switch (value.toString()) {
      case "200":
        powerBillvalue = "$100 - $200";
        break;
      case "300":
        powerBillvalue = "$200 - $300";
        break;
      case "400":
        powerBillvalue = "$300 - $400";
        break;
      case "500":
        powerBillvalue = "$500 - $600";
        break;
      case "600":
        powerBillvalue = "$600 - $700";
        break;
      case "700":
        powerBillvalue = "$700 - $800";
        break;
      case "800":
        powerBillvalue = "$800+";
        break;
      default:
        powerBillvalue = "under $100";
        break;
    }
    setPowerBillValue(powerBillvalue);
    return `${value}`;
  };

  let formContentHandler = null;
  switch (viewToShow) {
    case VIEWS.powerBill:
      formContentHandler = (
        <PowerbillContainer>
          <PowerbillHeader>Current Monthly Power Bill</PowerbillHeader>
          <PowerbillSubHeader>{powerBillValue}</PowerbillSubHeader>
          <div className={classes.root}>
            <Slider
              defaultValue={100}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={100}
              marks
              min={0}
              max={800}
            />
          </div>
          <PowerbillButton>Continue</PowerbillButton>
        </PowerbillContainer>
      );
      break;
    default:
      formContentHandler = (
        <ZipcodeContainer>
          <WelcomeTextContainer>
            <WelcomeTextHeader>
              Save On Your Monthly Electric Bill With Affordable Solar Energy
            </WelcomeTextHeader>
            <WelcomeTextInstruction>
              Enter basic information to see if your home is eligible!
            </WelcomeTextInstruction>
          </WelcomeTextContainer>
          <ZipCodeFormContainer>
            <ZipCodeForm>
              <ZipCodeFormHeader>FREE Expert Solar Quote</ZipCodeFormHeader>
              <ZipCodeFormSubHeader>
                See if you qualify for incentives in your area and get solar
                with zero upfront costs!
              </ZipCodeFormSubHeader>

              <TextField
                id="outlined-basic"
                label="Enter Zip Code"
                variant="outlined"
                style={{ width: "100%" }}
                value={zipCode}
                onChange={(e) => numbersOnly(e.target.value)}
              />
              <ZipCodeFormSubmit onClick={() => submitZipcode()}>
                Free Quote
              </ZipCodeFormSubmit>
            </ZipCodeForm>
          </ZipCodeFormContainer>
        </ZipcodeContainer>
      );
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <GenericFlexColumnContianer>
          <div>
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
            {formContentHandler}
          </div>
          <div>
            <FooterBackgroundImage></FooterBackgroundImage>
            <Footer>
              <p>@ 2020 EnergybillCruncher</p>
              <FooterLink>Terms And Disclosures</FooterLink>
              <FooterLink>Do Not Sell My Info </FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </Footer>
          </div>
        </GenericFlexColumnContianer>
      </div>
    </ThemeProvider>
  );
}

export default App;
