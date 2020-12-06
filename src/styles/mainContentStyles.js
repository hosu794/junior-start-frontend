import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import {colors} from "./colors";
import InputBase from "@material-ui/core/InputBase";

export const MainContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  height: 100%;
  width: 70%;
`
export const PaperLayout = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  background: ${colors.lightgray};
`
export const InputBaseLayout = styled(InputBase)`
  flex: 1
`