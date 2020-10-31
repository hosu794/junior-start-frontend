import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {colors} from "./colors";
import {theme} from "./theme";
import {ThemeProvider} from "@material-ui/styles";

const Layout = ({children}) => (
    <>
        <GlobalStyle/>
        <StyledWrapper>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledWrapper>
    </>
)

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat'; 
    font-size: 1rem;
    color: white;
    background: ${colors.background};
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`