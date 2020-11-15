import styled from "styled-components";
import {Form} from "formik";

export const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  
  >div {
      margin-bottom: 10px;
  }    
`

export const ErrorMsg = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: -10px;
  margin-bottom: 10px !important;
`