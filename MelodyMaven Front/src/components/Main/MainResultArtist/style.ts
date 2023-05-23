import styled, { keyframes } from 'styled-components'
import { MdPlayArrow, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`

export const MainPageResultArtistContainer = styled.div`
  width: 100%;
  height: auto;
`
export const MainPageResultWrap = styled.div`
  margin-top: 150px;
  width: 900px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  padding-bottom: 50px;

  //border: 1px solid black;
  border-radius: 10px;

  animation: ${boxFade} 2s linear;
`

export const MaingPageResultTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 160px;
  font-family: 'Pretendard-Bold';
  font-size: 60px;
  display: flex;
  justify-content: center;

  animation: ${boxFade} 1s linear;
`

export const MainPageResultPlayImg = styled.div`
  display: none;
  width: 45px;
  height: 45px;
  background-color: beige;
  position: absolute;
  border-radius: 70%;
  margin-left: 125px;
  margin-top: 130px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;

  :hover {
    transform: scale( 1.1);
  }

  animation: ${boxFade} 0.5s linear;
`


export const MainPageResultPlayImgIcon = styled(MdPlayArrow)`
  //margin-top: 8px;
  width: 30px;
  height: 30px;
`

export const MainPageResultLeftArrowIcon = styled(MdOutlineKeyboardArrowRight)`
  width: 40px;
  height: 40px;
  transform: scale(-1);
  margin-right: 1000px;
  cursor: pointer;
  position: absolute;

  :hover {
    transform: scale(-1.1);
  }
`
export const MainPageResultRightArrowIcon = styled(MdOutlineKeyboardArrowRight)`
  width: 40px;
  height: 40px;
  margin-left: 1000px;
  cursor: pointer;
  position: absolute;

  :hover {
    transform: scale(1.1);
  }
`

export const MainPageResultArtist = styled.div`
  //margin-top: 50px;
  //margin-top: 30px;
  //margin-bottom: 50px;
  min-width: 200px;
  height: 270px;
  /* background-color: black; */
  display: block;
  text-align: center;
  background-color: rgb(46, 46, 46);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;

  cursor: pointer;

  :hover {
    background-color: rgb(76, 76, 76);
  }
  :hover ${MainPageResultPlayImg} {
    display: flex;
    justify-content: center;
    align-items: center;
  };

  
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

export const MainPageResultArtistDetail = styled.div`
  width: 80px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  font-family: 'Pretendard-Bold';
  border-bottom: 1px solid black;

  cursor: pointer;
`