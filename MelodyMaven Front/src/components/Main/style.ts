import styled, { keyframes } from "styled-components"


export const MainPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  //min-height: calc(100vh - 120px) ;
  min-height: 750px;
  background-color: beige;
  align-items: center;
  box-sizing: border-box;
`

export const MainPageRecommendWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
    margin-top: 15px;

  width: 68%;
  justify-content: center;
  font-size: 40px;
  font-family: "Pretendard-Bold";
`

export const MainPageRecommendKrWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;

  width: 68%;
  justify-content: center;
  font-size: 40px;
  font-family: 'Pretendard-Thin';
`


export const MainPageSmallIntroduce = styled.div`
    //margin-left: 308px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
    padding-top: 150px;
    width: 68%;
    font-family: "Pretendard-ExtraLight";
    font-size: 20px;
`


export const MainPageUrlInput = styled.input`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 30px;
  width: 60%;
  margin-top: 100px;
  background-color: beige;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: 'Pretendard-Thin';

  ::placeholder {
    color: gray;
  }

  :focus {
    outline: none;
  }
`

export const MainPageUrlButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  background-color: beige;
  color: gray;
  border: 1px solid gray;
  font-family: 'Pretendard-Bold';
  cursor: pointer;
`

