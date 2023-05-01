import { LoginPageContainer, LoginPageTitle, LoginPageInput, LoginPageSideWrap, LoginPageSnip, LoginPageButton, LoginPageExplain, LoginPageMovementSignin } from "./style"

const Login = () => {
    return (
      <LoginPageContainer>
        <LoginPageSideWrap>
          <LoginPageTitle>Do I really need to log in?</LoginPageTitle>
          <LoginPageInput placeholder="Email" />
          <LoginPageInput placeholder="Password" />
          <LoginPageButton>Continue</LoginPageButton>
          <LoginPageExplain>
            If you lose your password, you can't find it Help yourself.
          </LoginPageExplain>
          <LoginPageExplain>
            Don't have an account?{' '}
            <LoginPageMovementSignin to="/signin">
              Sign up
            </LoginPageMovementSignin>
          </LoginPageExplain>
        </LoginPageSideWrap>
      </LoginPageContainer>
    )
}

export default Login