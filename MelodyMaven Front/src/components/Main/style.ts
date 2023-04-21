import styled, { keyframes } from "styled-components"


export const MainPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: calc(100vh - 120px) ;
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


export const MainPageSmallIntroduce = styled.div`
    //margin-left: 308px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 80px;
    padding-top: 150px;
    width: 68%;
    font-family: "Pretendard-ExtraLight";
    font-size: 20px;
`


export const MainPageTitleContent = styled.div`
    font-size: 30px;
    font-family: "Pretendard-Thin";
   width: 400px;
   
`

export const MainPageUrlInput = styled.input`
    padding: 10px;
  font-size: 30px;
  width: 420px;
  margin-top: 40px;
  background-color: beige;
  border: 1px dashed black;
  font-family: "Pretendard-Thin";

   ::placeholder {
    color: gray;
    }

`


