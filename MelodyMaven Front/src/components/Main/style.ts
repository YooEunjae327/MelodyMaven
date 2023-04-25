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
export const MaingPageRecommendTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    margin-bottom: 20px;
    width: 68%;
    font-family: "Pretendard-Bold";
    font-size: 50px;
    display: flex;
    justify-content: center;
`

export const MainPageRecommendForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
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
    font-family: "Pretendard-ExtraLight";
    font-size: 20px;
    display: flex;
    justify-content: center;
`


export const MainPageUrlInput = styled.input`
  padding: 10px;
  padding-bottom: 5px;
  font-size: 25px;
  width: 29%;
  margin-top: 100px;
  background-color: beige;
  border: none;
  border-bottom: 1px solid gray;
  font-family: 'Pretendard-Thin';
  display: flex;

  ::placeholder {
    color: gray;
  }

  :focus {
    outline: none;
  }
`

export const MainPageUrlButton = styled.button`
  padding: 10px;
  margin-top: auto;
  background-color: beige;
  color: gray;
  display: flex;
  font-size: 11px;
  justify-content: center;
  border: 1px solid gray;
  font-family: 'Pretendard-Bold';
  cursor: pointer;
`
