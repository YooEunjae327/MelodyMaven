import { useEffect, useRef, useState } from "react"
import { MainPageResultArtist, MainPageResultArtistContainer, MainPageResultArtistDetail, MainPageResultImg, MainPageResultInfo, MainPageResultInfoName, MainPageResultInfoWrap, MainPageResultLeftArrowIcon, MainPageResultPlayImg, MainPageResultPlayImgIcon, MainPageResultRightArrowIcon, MainPageResultWrap } from "./style"
import styled from "styled-components"

const MainResultArtist = (urlValue : any) => {
    console.log(urlValue)
    const [detalInfo, setDetailInfo] = useState(false)
    const arr = [
      'tomat',
      'tomt2',
      'tomat3',
      'tomat4',
      'tomato',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
   
    ]
  

    const detail = () => {
        setDetailInfo(true)

    }

    const fourArtits = () => {
      const result = []
      for(let i = 0; i < 4; i++) {
        result.push(
          <MainPageResultArtist>
            <MainPageResultPlayImg>
              <MainPageResultPlayImgIcon />
            </MainPageResultPlayImg>
            <MainPageResultImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b"></MainPageResultImg>
            <MainPageResultInfoWrap>
              <MainPageResultInfoName>Jame Berry</MainPageResultInfoName>
              <MainPageResultInfo>Artsits</MainPageResultInfo>
            </MainPageResultInfoWrap>
          </MainPageResultArtist>
        )
      }

      return result
    }

    return (
      <MainPageResultArtistContainer>
        <div>

        {!detalInfo ? (
          <>
            <MainPageResultWrap>{fourArtits()}</MainPageResultWrap>
            <MainPageResultArtistDetail onClick={detail}>
              See more
            </MainPageResultArtistDetail>
          </>
        ) : (
          <>
          <MainPageResultWrap>
              {arr.map((test, i) => (
                <MainPageResultArtist>
                  <MainPageResultPlayImg>
                    <MainPageResultPlayImgIcon />
                  </MainPageResultPlayImg>
                  <MainPageResultImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b"></MainPageResultImg>
                  <MainPageResultInfoWrap>
                    <MainPageResultInfoName>Jame Berry</MainPageResultInfoName>
                    <MainPageResultInfo>Artsits</MainPageResultInfo>
                  </MainPageResultInfoWrap>
                </MainPageResultArtist>
              ))}
              </MainPageResultWrap>
          </>
        )}
        </div>
      </MainPageResultArtistContainer>
    )
}

export default MainResultArtist