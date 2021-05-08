import styled, { css } from "styled-components";

const PowerbillContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PowerbillHeader = styled.h1`
  color: ${(props) =>
    props.theme.mode == "dark"
      ? props.theme.lightModeColor
      : props.theme.darkModeColor};
`;

const PowerbillSubHeader = styled.h2`
  color: limegreen;
`;

const PowerbillButton = styled.button`
  background-color: limegreen;
  border: none;
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2em;
  padding: 10px;
  box-shadow: 1px 2px gray;
  margin-top: 1em;
  cursor: pointer;
  transition: all ease-in 0.25s;
  width: 25%;

  :hover {
    background-color: green;
  }
`;

export {
  PowerbillContainer,
  PowerbillHeader,
  PowerbillButton,
  PowerbillSubHeader,
};
