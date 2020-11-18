import styled from "styled-components";
import {colors} from "./colors";

export const MessengerPageLayout = styled.div`
  display: flex;
  height: 100%;
`

export const ConversationLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export const Header = styled.div`
  border-bottom: 1px solid ${colors.lightgray};
`

export const MessagesLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export const MessageLayout = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const Content = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.gray};
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  padding: 10px;
  color: ${colors.lightgray};
`

export const ContactsLayout = styled.div`
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`

export const ContactLayout = styled.div`
  font-size: 1.1em;
  border-top: 1px solid ${colors.lightgray};
  padding: 0.5em 0.8em;
  
  :hover {
    background-color: ${colors.gray};
    cursor: pointer;
  }
`
export const Name = styled.div`
  display: flex;
  white-space: nowrap;
`