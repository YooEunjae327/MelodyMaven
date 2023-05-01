import { Navigate } from "react-router-dom"
import { NavBarAboutText, NavBarContainer, NavBarSideContainer, NavBarTextWrap } from "./style"
import Home from "./NavInfo"


const NavBar = () => {    
    return (
      <NavBarContainer>
        <NavBarSideContainer>
    

          {Home.map((value, index) => {
            return (
              <NavBarTextWrap key={index}>
                <NavBarAboutText to={value.path}  >{value.value}</NavBarAboutText>
              </NavBarTextWrap>
            )
          })}
        </NavBarSideContainer>
      </NavBarContainer>
    )
}

export default NavBar