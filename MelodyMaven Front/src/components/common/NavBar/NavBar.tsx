import { NavBarAboutText, NavBarContainer, NavBarDetailTitle, NavBarSideContainer, NavBarTextWrap, NavBarTitle } from "./style"


const NavBar = () => {
    const home = [
      { value : 'HOME'},
      { value : 'ABOUT'},
      { value : 'QnA'},
      { value : 'CHECK WITH SOMEONE'},
      { value : 'LOGIN'}
    ]
    
    return (
      <NavBarContainer>
        <NavBarSideContainer>
          <NavBarTitle>
            <NavBarDetailTitle>Melody</NavBarDetailTitle>
            <NavBarDetailTitle>Maven</NavBarDetailTitle>
          </NavBarTitle>

          {home.map((value, index) => {
            return (
              <NavBarTextWrap key={index}>
                <NavBarAboutText >{value.value}</NavBarAboutText>
              </NavBarTextWrap>
            )
          })}
        </NavBarSideContainer>
      </NavBarContainer>
    )
}

export default NavBar