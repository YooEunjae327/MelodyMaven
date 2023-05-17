import styled, { keyframes } from 'styled-components'
import { SlArrowDownCircle } from 'react-icons/sl'

export const MainPageResultWrap = styled.div`
  margin-top: 50px;
  width: 60%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  position: relative;

  //border: 1px solid black;
  border-radius: 10px;
`
export const MainPageResultArtist = styled.div`
  margin-top: auto;
  //margin-top: 30px;
  margin-bottom: auto;
  margin-left: 20px;
  width: 200px;
  height: 270px;
  /* background-color: black; */
  display: block;
  text-align: center;
  background-color: rgb(46, 46, 46);
  border-radius: 20px;

  :hover {
    background-color: rgb(86, 86, 86);
  }
`

export const MainPageResultPlayImg = styled.div`
  width: 45px;
  height: 45px;
  background-color: #66cc00;
  position: absolute;
  border-radius: 70%;
  margin-left: 125px;
  margin-top: 130px;
`

export const MainPageResultImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 160px;
  height: 160px;
  margin-bottom: 5px;
  margin-top: 20px;
  border-radius: 70%;
  //border: 2px solid whi;
`

export const MainPageResultInfoWrap = styled.div`
  margin-left: 20px;
  display: block;
  text-align: left;
`

export const MainPageResultInfoName = styled.p`
  font-size: 14px;
  color: white;
  font-family: 'Pretendard-Bold';
`

export const MainPageResultInfo = styled.p`
  padding-top: 8px;
  font-size: 14px;
  font-family: 'Pretendard-SemBold';
  color: rgb(137, 137, 137);
`
