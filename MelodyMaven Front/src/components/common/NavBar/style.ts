import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
  width: 70%;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavBarTextWrap = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`

export const NavBarAboutText = styled(Link)`
  text-decoration-line: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-family: 'Pretendard-ExtraLight';
`

