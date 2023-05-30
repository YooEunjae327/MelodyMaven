import { SigninPageButton, SigninPageContainer, SigninPageExplain, SigninPageInput, SigninPageMovementLogin, SigninPageSideWrap, SigninPageTestingSpan, SigninPageTitle } from "./style"

const SignUp = () => {

    return (
      <SigninPageContainer>
        <SigninPageSideWrap>
          <SigninPageTitle>
            What if you want to see a song recommended before?
          </SigninPageTitle>
          <SigninPageTestingSpan>
            Honestly, you don't need to sign up, 
            login. I just wanted to make it.
          </SigninPageTestingSpan>
          <SigninPageInput placeholder="Email"></SigninPageInput>
          <SigninPageInput placeholder="Password"></SigninPageInput>
          <SigninPageInput placeholder="Password Check"></SigninPageInput>
          <SigninPageButton>Continue</SigninPageButton>
       
          <SigninPageExplain>
            Already have an account?{' '}
            <SigninPageMovementLogin to="/login">
              Log in
            </SigninPageMovementLogin>
          </SigninPageExplain>
        </SigninPageSideWrap>
      </SigninPageContainer>
    )
}

export default SignUp
