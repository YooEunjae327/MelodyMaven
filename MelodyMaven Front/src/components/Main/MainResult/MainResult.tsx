import { useEffect, useState } from 'react'
import { MainExplainContainer } from '../MainExplain/style'
import {
  MainResultArtistAlbumInfo,
  MainResultArtistAlbumInfoContainer,
  MainResultArtistAlbumInfoImg,
  MainResultArtistAlbumInfoWrap,
  MainResultArtistAlbumTitle,
  MainResultArtistAlbumWrap,
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
import { MainResultArtistInfo,  } from '../MainResultArtist/style'

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
            <MainResultArtistAlbumInfoImg src="https://i.scdn.co/image/ab676161000051746a80abb55f089d80528d24fc" />
            <MainResultArtistAlbumInfo>
              UNDERGROUND ROCKSTAR
            </MainResultArtistAlbumInfo>
          </MainResultArtistAlbumInfoWrap>

          <MainResultArtistAlbumInfoWrap>
            <MainResultArtistAlbumInfoImg src="https://i.scdn.co/image/ab676161000051746a80abb55f089d80528d24fc" />
            <MainResultArtistAlbumInfo>
              UNDERGROUND ROCKSTAR
            </MainResultArtistAlbumInfo>
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
