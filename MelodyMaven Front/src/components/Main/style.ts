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
  width: 68%;
  height: 600px;
  border: 1px dashed black;
  padding-left: 50px;
  padding-top: 80px;
  padding-right: 50px;
`


export const MainPageSmallIntroduce = styled.div`
    //margin-left: 308px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0.1ch;
    padding-top: 80px;
    width: 68%;
    font-family: "Pretendard-ExtraLight";
`


export const MainPageTitleContent = styled.p`
    font-size: 30px;
    font-family: "Pretendard-Thin";
   width: 400px;
   
`

export const MainPageUrlInput = styled.input`
    padding: 10px;
  font-size: 30px;
  width: 450px;
  margin-top: 40px;
  background-color: beige;
  border: 1px dashed black;
  font-family: "Pretendard-Thin";

   ::placeholder {
    color: gray;
    }

`

export const MaingPageAnalysisWrap = styled.div`
    width: 50%;
    min-height: 100px;
    background-color: aliceblue;
    float: right    ;
    margin-bottom: 10px;
    
`
