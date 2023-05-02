import styled from "styled-components";

export const MainExplainContainer = styled.div`
  width: 100%;
  min-height: 1100px;
  /* background-color: coral; */
  //background-color: burlywood;
  //background-color: #00CC99;
  //background-color: #00cc33;
  //background-color: #00cc66;
  background-color: black;
  display: table;

`

export const MainExplainMouse = styled.div`
  position: absolute;
  background-color: brown;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  top: 0px;
  left: 0px;

  transform: translate(-50%, -50%);
`


export const MainExplainWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  // 등장 애니매이션
  animation-name: opacity;
  animation-duration: 8000ms;
  margin-top: 200px;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 70%;
`

export const MainExplainTitle = styled.p`
    margin-top: 40px;
    font-size: 90px;
    color: beige;
    font-family: "Pretendard-Bold";
`

export const MainExplainRightTitle = styled.p`
  margin-top: 40px;
  font-size: 90px;
  color: beige;
  font-family: 'Pretendard-Bold';
  display: flex;
  justify-content: right;
`

export const MainExplainInfo = styled.div`
  color: beige;
  font-family: 'Pretendard-ExtraLight';
  font-size: 25px;

  /* margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  width: 500px;
  height: 650px;

  border-radius: 30px;

  font-size: 20px;
  font-family: 'Pretendard-ExtraLight'; */

`

export const MainExplainYouTubeLogo = styled.img`
width: 140px;
object-fit: contain;
`

