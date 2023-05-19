import { useEffect, useRef, useState } from 'react'
import {
  MainPageResultArtist,
  MainPageResultArtistContainer,
  MainPageResultArtistDetail,
  MainPageResultImg,
  MainPageResultInfo,
  MainPageResultInfoName,
  MainPageResultInfoWrap,
  MainPageResultLeftArrowIcon,
  MainPageResultPlayImg,
  MainPageResultPlayImgIcon,
  MainPageResultRightArrowIcon,
  MainPageResultWrap,
  MaingPageResultTitle,
} from './style'
import styled from 'styled-components'
import MainResult from '../MainResult/MainResult'

const MainResultArtist = (artist: any) => {
  const [detalInfo, setDetailInfo] = useState(false) // 디테일 useState
  const [chooseArtist, setChooseArtist] = useState([])


  const MainResultChange = (i: any) => {
    console.log(i)
    console.log(artist.info[i])
    console.log(typeof artist)
    setChooseArtist(artist.info[i])
  }

  // detail change
  const detail = () => {
    setDetailInfo(true)
  }

  // name format
  // eslint-disable-next-line no-restricted-globals
  const formatName = (name: String) => {
    const arr = name.split('')
    let value = ''
    for (let i = 0; i < arr.length; i++) {
      if (i < 15) value += arr[i]
      else {
        value += '...'
        break
      }
    }

    return value
  }

  const fourArtits = () => {
    const result = []
    for (let i = 0; i < 4; i++) {
      result.push(
        <MainPageResultArtist
          key={i}
          onClick={() => {
            MainResultChange(i)
          }}
        >
          <MainPageResultPlayImg>
            <MainPageResultPlayImgIcon />
          </MainPageResultPlayImg>
          <MainPageResultImg
            src={
              artist.info[i].images[0]
                ? artist.info[i].images[0].url
                : 'https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc'
            }
          ></MainPageResultImg>
          <MainPageResultInfoWrap>
            <MainPageResultInfoName>
              {artist.info[i].name.length < 15
                ? artist.info[i].name
                : formatName(artist.info[i].name)}
            </MainPageResultInfoName>
            <MainPageResultInfo>
              {artist.info[i].genres[0] ? artist.info[i].genres[0] : 'Artist'}
            </MainPageResultInfo>
          </MainPageResultInfoWrap>
        </MainPageResultArtist>
      )
    }

    return result
  }

  return (
    <>
      {chooseArtist.length === 0 ? (
        <>
          <MainPageResultArtistContainer>
            <MaingPageResultTitle>
              Please choose the artist you're looking for
            </MaingPageResultTitle>
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
                    {artist.info.map((value: any, i: number) => (
                      <MainPageResultArtist
                        key={i}
                        onClick={() => {
                          MainResultChange(i)
                        }}
                      >
                        <MainPageResultPlayImg>
                          <MainPageResultPlayImgIcon />
                        </MainPageResultPlayImg>
                        <MainPageResultImg
                          src={
                            value.images[0]
                              ? value.images[0].url
                              : 'https://play-lh.googleusercontent.com/eN0IexSzxpUDMfFtm-OyM-nNs44Y74Q3k51bxAMhTvrTnuA4OGnTi_fodN4cl-XxDQc'
                          }
                        />
                        <MainPageResultInfoWrap>
                          <MainPageResultInfoName>
                            {value.name.length < 15
                              ? value.name
                              : formatName(value.name)}
                          </MainPageResultInfoName>
                          <MainPageResultInfo>
                            {value.genres[0] ? value.genres[0] : 'Artist'}
                          </MainPageResultInfo>
                        </MainPageResultInfoWrap>
                      </MainPageResultArtist>
                    ))}
                  </MainPageResultWrap>
                </>
              )}
            </div>
          </MainPageResultArtistContainer>
        </>
      ) : (
        <>
          <MainResult info={chooseArtist} />
        </>
      )}
    </>
  )
}

export default MainResultArtist
