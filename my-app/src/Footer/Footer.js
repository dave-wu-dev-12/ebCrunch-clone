import styled, { css } from "styled-components";

const Footer = styled.div`
  display: flex;
  color: ${(props) =>
    props.theme.mode == "dark"
      ? props.theme.lightModeColor
      : props.theme.darkModeColor};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterBackgroundImage = styled.div`
  background-image: url("https://pv-magazine-usa.com/wp-content/uploads/sites/2/2017/10/suburban-house-roof-solar-panels.jpg");
  background-repeat: repeat-x;
  height: 200px;
  background-size: contain;
`;

const FooterLink = styled.a`
  margin: 0 1em;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export { Footer, FooterLink, FooterBackgroundImage };
