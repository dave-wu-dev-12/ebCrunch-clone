import styled, { css } from "styled-components";

const HomeownerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 2000px;
  margin: 0 auto;
  padding: 3em 0;
  flex-direction: column;
`;

const HomeownerHeader = styled.h1`
  color: ${(props) =>
    props.theme.mode == "dark"
      ? props.theme.lightModeColor
      : props.theme.darkModeColor};
`;

const HomeownerSelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 2000px;
  margin: 0 auto;
`;

const Homeowner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 2em;
  margin: 0 2em;
  border: 1px solid lightgray;
  transition: top ease-in 0.25s;
  cursor: pointer;
  position: relative;
  top: 0;

  :hover {
    border: 1px solid limegreen;
    box-shadow: 1px 2px gray;
    top: -10px;
  }
`;

export {
  HomeownerContainer,
  HomeownerHeader,
  HomeownerSelectionContainer,
  Homeowner,
};
