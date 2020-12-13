import styled from "styled-components";
import {colors} from "./colors";
import Box from "@material-ui/core/Box";

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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${colors.lightgray};
  
    h3 {
      margin: auto 0;
    }
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

export const ContactLayout = styled(Box)`
  display: flex;
  font-size: 1.1em;
  border-top: 1px solid ${colors.lightgray};
  padding: 0.5em 0;
  text-decoration: none;
  color: white;
  
  :hover {
    background-color: ${colors.gray};
    cursor: pointer;
  }
`
export const ContactsMobileLayout = styled.div`

`
export const Name = styled.div`
  width: 15ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
`

export const ContactsTitle = styled.div`
  display: flex;
  
    h3 {
      margin-bottom: 0;
    }
`

export const DesktopOnly = styled.div`
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

export const MobileOnly = styled.div`
  display: flex;
  
  @media only screen and (min-width: 768px) {
    display: none;
  }
`