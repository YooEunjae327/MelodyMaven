import styled, { keyframes } from "styled-components"
import { SlArrowDownCircle } from 'react-icons/sl'


export const MainPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: calc(100vh - 12px) ;
  background-color: beige;
  align-items: center;
  box-sizing: border-box;
`
export const MaingPageRecommendTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 160px;
    margin-bottom: 20px;
    width: 68%;
    font-family: "Pretendard-Bold";
    font-size: 110px;
    display: flex;
    justify-content: center;
`

export const MainPageRecommendForm = styled.form`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 68%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: 'Pretendard-Bold';
`

export const MainPageRecommendKrWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  font-size: 40px;
  font-family: 'Pretendard-Thin';
`

export const MainPageSmallIntroduce = styled.div`
    //margin-left: 308px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
    width: 68%;
    height: 50px;
    font-family: "Pretendard-SemBold";
    font-size: 25px;
    display: flex;
    justify-content: center;
`


export const MainPageUrlInput = styled.input`
  padding-left: 25px;
  font-size: 20px;
  width: 400px;
  height: 60px;
  margin-top: 100px;
  background-color: beige;
  border: 1px solid gray;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';
  display: flex;
  cursor: pointer;

  ::placeholder {
    color: gray;
  }

  :focus {
    outline: none;
  }
`

export const MainPageUrlButton = styled.button`
  width: 150px;
  height: 60px;
  margin-top: auto;
  margin-left: 20px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  border: none;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';

  word-spacing: 10px;
  
  cursor: pointer;

  :hover {
    background-color: beige;
    border: 1px solid gray;
    color: black;
  }
`

