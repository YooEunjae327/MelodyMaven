import styled from 'styled-components'
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoPlaySkipBack } from 'react-icons/io5'

export const MainResultContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  width: 100%;
  min-height: 1000px;
  background-color: beige;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  text-align: center;
`

export const MainResultGenresContainer = styled.div`
  width: 50%;
  height: auto;
`
export const MainResultTracksContainer = styled.div`
  width: 50%;
  height: 780px;
  margin-right: 60px;
  background-color: #2f4858;
  margin-bottom: 80px;
  border-radius: 20px;
  display: block;
`

export const MainResultTracksTitle = styled.div`
  padding: 30px 0px 0px 30px;
  text-align: left;
  color: white;
  font-size: 30px;
  font-family: 'Pretendard-Bold';
`

export const MainResultTracksList = styled.div`
`

export const MainResultGenresImg = styled.img`
  width: 540px;
  margin-top: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`

export const MainResultGenres = styled.p`
  margin-top: 10px;
  font-size: 90px;
  font-family: 'Pretendard-Bold';
`

export const MainResultButtonWrap = styled.div` 
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  //background-color: black;
`

export const MainResultPlayButton = styled(AiFillPlayCircle)`
  width: 60px;
  height: 60px;
`
export const MainResultLeftButton = styled(IoPlaySkipBack)`
  margin-top: 10px;
  width: 40px;
  height: 40px;
  margin-right: 25px;
`
export const MainResultRightButton = styled(IoPlaySkipBack)`
  margin-top: 10px;
  width: 40px;
  height: 40px;
  margin-left: 25px;

  transform: scale(-1);
`

export const MainResultPlayBarWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`

export const MainResultPlayBarTime = styled.div`
  font-size: 14px;
  font-family: 'Pretendard-SemBold';
`

export const MainResultPlayBarInWrap = styled.div`
  display: flex;
  height: 7px;
`

export const MainResultPlayBar = styled.div`
  position: absolute;
  margin-top: 4px;
  margin-left: 11px;
  margin-right: 11px;
  width: 300px;
  height: 7px;
  border-radius: 50px;
  background-color: rgba(80, 80, 80);
`
export const MainResultPlayBarFull = styled.div`
  //position: absolute;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
  width: 400px;
  height: 7px;
  border-radius: 50px;
  background-color: #bfd2bb;
`


export const MainResultInfo = styled.div`
  display: table;
  padding-bottom: 350px;
  width: 350px;
  height: auto;
`
export const MainResultInfoDetailTitle = styled.p`
  padding-top: 200px;
  font-size: 60px;
  font-family: 'Pretendard-Bold';
`

export const MainResultInfoDetail = styled.div`
  width: 250px;
  height: 100px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  color: gray;
  word-break: break-all;
`

export const MainResultImgWrap = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  width: 70%;
  justify-content: center;
`

export const MainResultLine = styled.div`
  height: 50px;
  width: 50px;
  border-bottom: 1px solid gray;
`
export const MainResultImgContainer = styled.div`
  display: flex;
  margin-right: auto;
`

export const MainResultImgSideContainer = styled.div`
  margin-top: 120px;
  display: flex;
  margin-right: auto;
`

export const MainResultUrlContainer = styled.div`
  margin-top: 30px;
  margin-left: 100px;
  display: block;
  height: 30px;
  width: 600px;
  font-family: 'Pretendard-Thin';
`

export const MainResultImgInfoWrap = styled.div`
  display: block;
  text-align: left;
`

export const MainResultYoutubeWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 250px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
  color: white;
  cursor: pointer;

  :hover {
    background-color: beige;
    border: 1px solid black;
    color: black;
  }
`
export const MainResultSpotifyWrap = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-right: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 250px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid black;
  background-color: beige;
  color: black;

  :hover {
    background-color: black;
    border: none;
    color: beige;
  }
`

export const MainResultImgInfo = styled.p`
  font-size: 100px;
  font-family: 'Pretendard-Bold';

  color: rgb(49, 51, 56);
`
export const MainResultImgInfoDetail = styled.p`
  text-align: left;
  font-size: 40px;
  font-family: 'Pretendard-Thin';

  color: gray;
`

export const MainResultArtistAlbumWrap = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 750px;
  font-size: 20px;

  background-color: rgba(18, 18, 18);
`

export const MainResultArtistAlbumTitle = styled.p`
  padding-top: 20px;
  font-size: 80px;
  color: beige;

  font-family: 'Pretendard-Bold';
`

export const MainResultArtistAlbumInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const MainResultArtistAlbumInfoWrap = styled.div`
  width: 500px;
  height: 570px;
  display: block;
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
  border-radius: 20px;

  //background-color: rgb(35, 35, 35);
`

export const MainResultArtistAlbumInfoImg = styled.img`
  width: 440px;
  height: 440px;

  border: 1px solid beige;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.83) 0px 3px 8px;
`
export const MainResultArtistAlbumInfo = styled.p`
  margin-top: 20px;
  font-size: 25px;
  font-family: 'Pretendard-Bold';
  color: white;
  text-align: start;
  margin-left: 50px;
`

export const MainResultArtistAlbumInfoName = styled.p`
  margin-top: 15px;
  font-size: 14px;
  font-family: 'Pretendard-Bold';
  color: rgb(137, 137, 137);
  text-align: start;
  margin-left: 50px;
`

export const MainResultImg = styled.img`
  width: 580px;
  height: 580px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  :hover {
    transform: scale(1.01);
  }
`

export const MainResultRecommendSongs = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 400px;
  margin-bottom: 15px;
  background-color: #33cc99;
  border-radius: 5px;
`

export const MainResultBottomLine = styled.hr`
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-top: 10px;
`

export const MainResultBottomLineButton = styled.a`
  font-family: 'Pretendard-Bold';
  border-bottom: 1px solid black;
  color: black;
  cursor: pointer;
`
export const MainResultBottomLineWrap = styled.div`
  width: 1000px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  display: table;
  justify-content: center;
  text-align: center;
`

export const MainResultYoutubeWhite = styled(BsYoutube)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: beige;
`
export const MainResultYoutubeBlack = styled(BsYoutube)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: black;
`

export const MainResultSpotifyWhite = styled(BsSpotify)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: beige;
`

export const MainResultSpotifyBlack = styled(BsSpotify)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: black;
`

export const MainResultBestMusicWarp = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 130px;
  width: 600px;
  height: 200px;

  position: absolute;
`
export const MainResultBestMusicImg = styled.img`
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const MainResultBestMusicInfoWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-left: 20px;
`
export const MainResultBestMusicInfoTitle = styled.p`
  font-size: 30px;
  font-family: 'Pretendard-Bold';
`
export const MainResultBestMusicInfo = styled.p``
