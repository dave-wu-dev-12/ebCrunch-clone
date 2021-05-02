import styled, { css } from "styled-components";

const Header = styled.div`
  background-color: transparent;
  padding: 0.5em 1.5em;
  margin: 0 auto;
  width: 90%;
  max-width: 2000px;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 0.5em 0.1em;
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid lightgray;
`;

const HeaderBlockItem = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogoText = styled.h2`
  margin-right: 0.5em;
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

const HeaderSmallLogoText = styled.h4`
  margin-right: 0.5em;
  @media (max-width: 500px) {
    font-size: 0.5em;
  }
`;

const HeaderThemeModeButtom = styled.button`
  background-color: transparent;
  padding: 0.25em 1em;
  border-radius: 5px;
  color: ${(props) =>
    props.theme.mode == "dark"
      ? props.theme.lightModeColor
      : props.theme.darkModeColor};
  @media (max-width: 500px) {
    font-size: 0.5em;
    padding: 0.25em 0.25em;
  }
`;

export {
  Header,
  HeaderContainer,
  HeaderBlockItem,
  HeaderLogoText,
  HeaderSmallLogoText,
  HeaderThemeModeButtom,
};
