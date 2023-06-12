import { useEffect, useRef, useState } from 'react'
import { MainExplainContainer } from '../MainExplain/style'
import {
  MainResultArtistAlbumInfo,
  MainResultArtistAlbumInfoContainer,
  MainResultArtistAlbumInfoImg,
  MainResultArtistAlbumInfoName,
  MainResultArtistAlbumInfoWrap,
  MainResultArtistAlbumTitle,
  MainResultArtistAlbumWrap,
  MainResultBlankContainer,
  MainResultButtonWrap,
  MainResultContainer,
  MainResultGenres,
  MainResultGenresContainer,
  MainResultGenresImg,
  MainResultImg,
  MainResultImgContainer,
  MainResultImgInfo,
  MainResultImgInfoDetail,
  MainResultImgInfoWrap,
  MainResultImgSideContainer,
  MainResultImgWrap,
  MainResultLeftButton,
  MainResultLine,
  MainResultNoneBlankContainer,
  MainResultPlayBar,
  MainResultPlayBarFull,
  MainResultPlayBarInWrap,
  MainResultPlayBarTime,
  MainResultPlayBarWrap,
  MainResultPlayButton,
  MainResultRightButton,
  MainResultTracksContainer,
  MainResultTracksExplain,
  MainResultTracksImg,
  MainResultTracksList,
  MainResultTracksMusicWrap,
  MainResultTracksNumber,
  MainResultTracksTitle,
  MainResultTracksTitleMusic,
  MainResultTracksWrap,
  MainResultUrlContainer,
} from './style'
import { MainResultArtistInfo } from '../MainResultArtist/style'
import axios from 'axios'

const MainResult = (info: any) => {
  const [currentSlide, setCurrentSlide] = useState(0) // 캐러셀 구현 state
  const [targetNumber, setTargetNumber] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const TOTAL_SLIDES = 3
  const tesintg = ['a','2', '3','4']


  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const BackMove = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES)
    } else {
      setCurrentSlide(currentSlide - 1)
    }

    setTargetNumber(targetNumber - 10)

    if (targetNumber < 10) {
      setTargetNumber(200)
    }
  }

  const FrontMove = () => {

    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }


    setTargetNumber(targetNumber + 10)

    if (targetNumber > 190) {
      setTargetNumber(0)
    }
  }

    useEffect(() => {
      if(slideRef.current !== null) {
        slideRef.current.style.transition = 'all 0.5s ease-in-out'
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
      }
    }, [currentSlide])


  return (
    <MainResultContainer>
      <MainResultGenresContainer>

        <MainResultBlankContainer ref={slideRef}>
          {tesintg.map((value, index) => (
            <MainResultNoneBlankContainer>
              <MainResultGenresImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b"></MainResultGenresImg>
              <MainResultGenres>ELECTRO SWING</MainResultGenres>
            </MainResultNoneBlankContainer>
          ))}
        </MainResultBlankContainer>

        <MainResultButtonWrap>
          <MainResultLeftButton onClick={BackMove} />
          <MainResultPlayButton />
          <MainResultRightButton onClick={FrontMove} />
        </MainResultButtonWrap>

        <MainResultPlayBarWrap>
          <MainResultPlayBarTime>
            {targetNumber >= 60 ? Math.floor(targetNumber / 60) : 0}:
            {targetNumber % 60 === 0 ? '00' : targetNumber % 60}
          </MainResultPlayBarTime>
          <MainResultPlayBarInWrap>
            <MainResultPlayBar count={targetNumber * 2}></MainResultPlayBar>
            <MainResultPlayBarFull></MainResultPlayBarFull>
          </MainResultPlayBarInWrap>
          <MainResultPlayBarTime>3:20</MainResultPlayBarTime>
        </MainResultPlayBarWrap>
      </MainResultGenresContainer>

      <MainResultTracksContainer>
        <MainResultTracksTitle>Popularity</MainResultTracksTitle>
        <MainResultTracksExplain>
          Even if I click it or turn it on, the song doesn't come out. It's
          going to the Spotify link.
        </MainResultTracksExplain>

        <MainResultTracksMusicWrap>
          <MainResultTracksWrap>
            <MainResultTracksImg src="https://i.scdn.co/image/ab676161000051746d4df884dc6c3cd35e2bef18" />
            <MainResultTracksTitleMusic>Toxic</MainResultTracksTitleMusic>
          </MainResultTracksWrap>

          <MainResultTracksWrap>
            <MainResultTracksImg src="https://i.scdn.co/image/ab67616100005174a37cb4fec26f168a015b24d9" />
            <MainResultTracksTitleMusic>ToamtoLover</MainResultTracksTitleMusic>
          </MainResultTracksWrap>

          <MainResultTracksWrap>
            <MainResultTracksImg src="https://i.scdn.co/image/ab67616d00001e028e3a164e8131a58a31c5535c" />
            <MainResultTracksTitleMusic>Testing</MainResultTracksTitleMusic>
          </MainResultTracksWrap>

          <MainResultTracksWrap>
            <MainResultTracksImg src="https://i.scdn.co/image/ab67616100005174250d3acf8d859b8a9914ae65" />
            <MainResultTracksTitleMusic>ToamtoLover</MainResultTracksTitleMusic>
          </MainResultTracksWrap>
        </MainResultTracksMusicWrap>
      </MainResultTracksContainer>

      {/* <MainResultImgWrap>
        <MainResultImgContainer>
          <MainResultImg src={info.artist.images[0].url} />

          <MainResultUrlContainer>
            <MainResultImgInfoWrap>
              <MainResultImgInfo>{info.artist.name}</MainResultImgInfo>
              <MainResultImgInfoDetail>
                {info.artist.genres[0]}
              </MainResultImgInfoDetail>
            </MainResultImgInfoWrap>
            <MainResultLine />
            <MainResultArtistInfo>
              Jamie Berry mainly makes genre songs for electroswing. His best
              album is 'tomato'. It also has 60,000 followers and has 47 out of
              100 popularity points. There are artists similar to this below, so
              please refer to it and listen to it together if you like it. :)
            </MainResultArtistInfo>
          </MainResultUrlContainer>
        </MainResultImgContainer>
      </MainResultImgWrap>

      <MainResultArtistAlbumWrap>
        <MainResultArtistAlbumTitle>Album</MainResultArtistAlbumTitle>
        <MainResultArtistAlbumInfoContainer>
          <MainResultArtistAlbumInfoWrap>
            <MainResultArtistAlbumInfoImg src="https://i.scdn.co/image/ab67616d0000b273be57345b0d4552352d4d0f90" />
            <MainResultArtistAlbumInfo>M O T O W N</MainResultArtistAlbumInfo>
            <MainResultArtistAlbumInfoName>
              2019 · Album
            </MainResultArtistAlbumInfoName>
          </MainResultArtistAlbumInfoWrap>

          <MainResultArtistAlbumInfoWrap>
            <MainResultArtistAlbumInfoImg src="https://i.scdn.co/image/ab67616d0000b273e0891e322bc2773b1e4389c2" />
            <MainResultArtistAlbumInfo>Boyhood</MainResultArtistAlbumInfo>
            <MainResultArtistAlbumInfoName>
              2023 · Album
            </MainResultArtistAlbumInfoName>
          </MainResultArtistAlbumInfoWrap>

          <MainResultArtistAlbumInfoWrap>
            <MainResultArtistAlbumInfoImg src="https://i.scdn.co/image/ab67616d0000b2735792dec78b32f1c3efe2abe7" />
            <MainResultArtistAlbumInfo>
              UNDERGROUND ROCKSTAR
            </MainResultArtistAlbumInfo>
            <MainResultArtistAlbumInfoName>
              2020 · Album
            </MainResultArtistAlbumInfoName>
          </MainResultArtistAlbumInfoWrap>
        </MainResultArtistAlbumInfoContainer>
      </MainResultArtistAlbumWrap> 

      {/*    
      <MainResultBottomLineWrap>
        <MainResultBottomLineButton onClick={MoveToTop}>
          If you want to go to the top, enjoy it here
        </MainResultBottomLineButton>
        <MainResultBottomLine />
      </MainResultBottomLineWrap> */}
    </MainResultContainer>
  )
}

export default MainResult

// https://img.youtube.com/vi/8UVNT4wvIGY/maxresdefault.jpg
