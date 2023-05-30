import { Link } from "react-router-dom";
import styled from "styled-components";

export const SigninPageContainer = styled.div`
  width: 100%;
  height: 1000px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: beige;
`

export const SigninPageTestingSpan = styled.span`
    margin-bottom: 60px;
    font-family: 'Pretendard-Thin';
`

export const SigninPageSideWrap = styled.div`
  width: 50%;
  height: 900px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SigninPageSnip = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70px;
`

export const SigninPageTitle = styled.div`
  font-size: 50px;
  font-family: 'Pretendard-Bold';
`

export const SigninPageInput = styled.input`
  padding-left: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: beige;
  font-family: 'Pretendard-Thin';
  font-size: 14px;

  :focus {
    outline: none;
  }
`

export const SigninPageButton = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 40px;
  //background-color: #33cc99;
  background-color: black;
  color: white;
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  font-size: 18px;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  font-family: 'Pretendard-Thin';
  cursor: pointer;
`

export const SigninPageExplain = styled.span`
  margin-top: 20px;
  font-family: 'Pretendard-Thin';
`

export const SigninPageMovementLogin = styled(Link)`
  text-decoration-line: none;
  font-family: 'Pretendard-Bold';
  color: #297b00;
`