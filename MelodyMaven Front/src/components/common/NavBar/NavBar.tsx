import { Link, Navigate } from "react-router-dom"
import { NavBarAboutText, NavBarContainer, NavBarSideContainer, NavBarTextWrap } from "./style"
import Home from "./NavInfo"


const NavBar = () => {    
    return (
      <NavBarContainer>
        <NavBarSideContainer>
          {Home.map((value, index) => {
            return (
                <NavBarAboutText key={index} to={value.path}  >{value.value}</NavBarAboutText>
            )
          })}
        </NavBarSideContainer>
      </NavBarContainer>
    )
}

export default NavBar