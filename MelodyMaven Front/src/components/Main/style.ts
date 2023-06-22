import styled, { keyframes } from 'styled-components'
import { MdError } from 'react-icons/md'

export const MainPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 90vh;
  background-color: beige;
  align-items: center;
  box-sizing: border-box;
`
export const MaingPageRecommendTitle = styled.p`
  padding-top: 11vw;
  margin-bottom: 20px;
  width: 100%;
  font-family: 'Pretendard-Bold';
  font-size: 6vw;
  text-align: center;
`

export const MainPageRecommendForm = styled.form`
  margin-top: 140px;
  height: 4vw;
  display: flex;
  justify-content: center;
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
  font-family: 'Pretendard-SemBold';
  font-size: 1.3vw;
  display: flex;
  justify-content: center;
`

export const MainPageUrlInput = styled.input`
  padding-left: 25px;
  font-size: 1vw;
  width: 20vw;
  height: 3vw;
  margin-top: auto;
  margin-bottom: auto;
  background-color: beige;
  border: 1px solid gray;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';
  display: flex;
  cursor: pointer;


  :focus {
    outline: none;
  }
`

export const MainPageUrlButton = styled.button`
  width: 7.5vw;
  height: 3vw;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1vw;
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

export const MainPageErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 15vw;  
  color: red;
`

export const MainPageErrorContent = styled.p`
  margin-left: 5px;
  font-size: 0.8vw;
  font-family: 'Pretendard-Thin';
`

export const MainPageErrorImg = styled(MdError)`
  width: 20px;
  height: 20px;
`