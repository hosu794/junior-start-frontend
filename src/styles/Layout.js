import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  </>
);

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: white;
    background: ${colors.background};
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
  }
  
  h1, h2, h3, h4, h5 {
    margin-top: 0;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
