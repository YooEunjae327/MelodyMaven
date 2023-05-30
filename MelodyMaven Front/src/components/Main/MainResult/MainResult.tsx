import { useEffect, useState } from 'react'
import { MainExplainContainer } from '../MainExplain/style'
import {
  MainResultArtistAlbumInfo,
  MainResultArtistAlbumInfoContainer,
  MainResultArtistAlbumInfoImg,
  MainResultArtistAlbumInfoName,
  MainResultArtistAlbumInfoWrap,
  MainResultArtistAlbumTitle,
  MainResultArtistAlbumWrap,
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
  MainResultPlayBar,
  MainResultPlayBarFull,
  MainResultPlayBarInWrap,
  MainResultPlayBarTime,
  MainResultPlayBarWrap,
  MainResultPlayButton,
  MainResultRightButton,
  MainResultTracksContainer,
  MainResultTracksList,
  MainResultTracksTitle,
  MainResultUrlContainer,
} from './style'
import { MainResultArtistInfo,  } from '../MainResultArtist/style'
import axios from 'axios'

const MainResult = (info: any) => {
  const [changeSpotify, setChangeSpotify] = useState(false) // Spotify logo 변경


  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MainResultContainer>
      <MainResultGenresContainer>
        <MainResultGenresImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b"></MainResultGenresImg>
        <MainResultGenres>ELECTRO SWING</MainResultGenres>

        <MainResultButtonWrap>
          <MainResultLeftButton />
          <MainResultPlayButton />
          <MainResultRightButton />
        </MainResultButtonWrap>

        <MainResultPlayBarWrap>
          <MainResultPlayBarTime>0:00</MainResultPlayBarTime>
          <MainResultPlayBarInWrap>
            <MainResultPlayBar></MainResultPlayBar>
            <MainResultPlayBarFull></MainResultPlayBarFull>
          </MainResultPlayBarInWrap>
          <MainResultPlayBarTime>2:10</MainResultPlayBarTime>
        </MainResultPlayBarWrap>
      </MainResultGenresContainer>

      <MainResultTracksContainer>
        <MainResultTracksTitle>Popularity</MainResultTracksTitle>
        <MainResultTracksList></MainResultTracksList>
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
      </MainResultArtistAlbumWrap> */}

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
