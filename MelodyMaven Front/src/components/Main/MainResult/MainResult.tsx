import { useEffect, useState } from 'react'
import { MainExplainContainer } from '../MainExplain/style'
import {
  MainResultBestMusicImg,
  MainResultBestMusicInfo,
  MainResultBestMusicInfoTitle,
  MainResultBestMusicInfoWrap,
  MainResultBestMusicWarp,
  MainResultBottomLine,
  MainResultBottomLineButton,
  MainResultBottomLineWrap,
  MainResultContainer,
  MainResultImg,
  MainResultImgContainer,
  MainResultImgInfo,
  MainResultImgInfoDetail,
  MainResultImgInfoWrap,
  MainResultImgWrap,
  MainResultInfo,
  MainResultInfoDetail,
  MainResultInfoDetailTitle,
  MainResultLine,
  MainResultRecommendSongs,
  MainResultSpotifyBlack,
  MainResultSpotifyWhite,
  MainResultSpotifyWrap,
  MainResultUrlContainer,
  MainResultYoutubeBlack,
  MainResultYoutubeWhite,
  MainResultYoutubeWrap,
} from './style'

const MainResult = (artist: any) => {
  const [changeSpotify, setChangeSpotify] = useState(false) // Spotify logo 변경

  const changeSpotifyLogo = () => {
    setChangeSpotify(true)
  }

  const changeSpotifyLogoLe = () => {
    setChangeSpotify(false)
  }

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MainResultContainer>
      <MainResultImgWrap>
        <MainResultImgContainer>
          <MainResultImg src={artist.info.images[0].url} />

          <MainResultUrlContainer>
            <MainResultImgInfoWrap>
              <MainResultImgInfo>{artist.info.name}</MainResultImgInfo>
              <MainResultImgInfoDetail>
                {artist.info.genres[0]}
              </MainResultImgInfoDetail>
            </MainResultImgInfoWrap>
            {/* <MainResultSpotifyWrap
              onMouseOver={changeSpotifyLogo}
              onMouseLeave={changeSpotifyLogoLe}
            >
              {changeSpotify === false ? (
                <MainResultSpotifyBlack />
              ) : (
                <MainResultSpotifyWhite />
              )}
              Spotify
            </MainResultSpotifyWrap> */}
            {/* <MainResultBestMusicWarp>
              <MainResultBestMusicImg src="https://i.scdn.co/image/ab67616d00001e02ee07023115f822012390d2a0" />
              <MainResultBestMusicInfoWrap>
                  <MainResultBestMusicInfoTitle>Main album</MainResultBestMusicInfoTitle>
                <MainResultBestMusicInfoTitle>Fever Dreams</MainResultBestMusicInfoTitle>
              </MainResultBestMusicInfoWrap>
            </MainResultBestMusicWarp>
             */}
          </MainResultUrlContainer>
        </MainResultImgContainer>
      </MainResultImgWrap>
      {/* <MainResultImgWrap>
              <MainResultInfo>
                <MainResultInfoDetailTitle>Reccomend</MainResultInfoDetailTitle>
                <MainResultInfoDetailTitle>Music</MainResultInfoDetailTitle>
                <MainResultInfoDetailTitle>#testing</MainResultInfoDetailTitle>
              </MainResultInfo>
              <MainResultLine></MainResultLine>

              <MainResultImgContainer>
                <MainResultImg src="https://img.youtube.com/vi/5NV6Rdv1a3I/maxresdefault.jpg" />
                <MainResultImgInfo>asd</MainResultImgInfo>
                <MainResultImgInfoDetail>asd</MainResultImgInfoDetail>

                <MainResultUrlContainer>
                  <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
                  <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
                </MainResultUrlContainer>
              </MainResultImgContainer>
            </MainResultImgWrap> */}

      {/* <MainResultBottomLineWrap>
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
