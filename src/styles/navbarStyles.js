import styled from "styled-components";
import {colors} from "./colors";
import {fonts} from "./fonts";
import Box from "@material-ui/core/Box";

export const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${colors.navbar};
`

export const LogoLayout = styled(Box)`
  font-size: 1.5em;
  font-weight: ${fonts.bold};
  font-style: italic;
  flex-grow: 1;
  text-decoration: none;
  color: white;
`