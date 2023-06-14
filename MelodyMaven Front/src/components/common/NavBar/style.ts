import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'



export const NavBarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 120px;
  background-color: beige;
`

export const NavBarSideContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavBarTextWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const NavBarAboutText = styled(Link)`
  text-decoration-line: none;
  color: black;
  margin-top: 40px;
  margin-left: 2.7vw;
  margin-right: 2.7vw;
  cursor: pointer;
  font-size: 1vw;
  font-family: 'Pretendard-ExtraLight';


`



