import styled, { css } from "styled-components";

const ZipcodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5em;
  max-width: 2000px;
  margin: 0 auto;
  padding-top: 3em;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 1em;
  box-sizing: border-box;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const WelcomeTextHeader = styled.h1`
  text-align: end;
  margin: 0 0;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const WelcomeTextInstruction = styled(WelcomeTextHeader)`
  color: green;
  font-size: 1.25em;
  font-weight: 500;
  margin-top: 1em;
`;

const ZipCodeFormContainer = styled(WelcomeTextContainer)`
  width: 35%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2em 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ZipCodeForm = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const ZipCodeFormHeader = styled(WelcomeTextHeader)`
  color: green;
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom: 0.25em;
  text-align: start;
`;

const ZipCodeFormSubHeader = styled.p`
  font-weight: 400;
  text-align: start;
  font-size: 0.75em;
`;

const ZipCodeFormSubmit = styled.button`
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
  width: 100%;

  :hover {
    background-color: green;
  }
`;

export {
  ZipcodeContainer,
  WelcomeTextContainer,
  WelcomeTextHeader,
  WelcomeTextInstruction,
  ZipCodeFormContainer,
  ZipCodeFormHeader,
  ZipCodeFormSubHeader,
  ZipCodeFormSubmit,
  ZipCodeForm,
};
