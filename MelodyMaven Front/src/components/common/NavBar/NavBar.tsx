import { Navigate } from "react-router-dom"
import { NavBarAboutText, NavBarContainer, NavBarSideContainer, NavBarTextWrap } from "./style"


const NavBar = () => {
    //const navigate = Navigate()
    const home = [
      { value : 'HOME'},
      { value : 'ABOUT'},
      { value : 'QnA'},
      { value : 'CHECK WITH SOMEONE'},
      { value : 'LOGIN'},
      { value : "SIGN IN"}
    ]
    
    return (
      <NavBarContainer>
        <NavBarSideContainer>
    

          {home.map((value, index) => {
            return (
              <NavBarTextWrap key={index}>
                <NavBarAboutText  >{value.value}</NavBarAboutText>
              </NavBarTextWrap>
            )
          })}
        </NavBarSideContainer>
      </NavBarContainer>
    )
}

export default NavBar