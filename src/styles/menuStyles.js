import styled from "styled-components";

export const MenuLayout = styled.div`
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 10px;
  
    Button {
      margin-bottom: 5px;
    }
  }
`