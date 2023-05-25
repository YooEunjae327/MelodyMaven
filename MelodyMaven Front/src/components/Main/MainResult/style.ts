import styled from 'styled-components'
import { BsSpotify, BsYoutube } from 'react-icons/bs'



export const MainResultContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  width: 100%;
  min-height: 1000px;
  background-color: beige;
  align-items: center;
  box-sizing: border-box;
  display: table;
  justify-content: center;
  text-align: center;

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

  color: gray
`

export const MainResultArtistAlbumWrap = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 700px;
  font-size: 20px;

  background-color: black;
`

export const MainResultArtistAlbumTitle = styled.p`
  padding-top: 20px;
  font-size: 80px;
  color: beige;
`

export const MainResultArtistAlbumInfoContainer = styled.div`
  margin-top: 50px ;
  display: flex;
  justify-content: space-around;
`

export const MainResultArtistAlbumInfoWrap = styled.div`
  display: block;
`

export const MainResultArtistAlbumInfoImg = styled.img`
  width: 320px;
  height: 320px;
`
export const MainResultArtistAlbumInfo = styled.p`  
  margin-top: 10px;
  color: beige;
  font-size: 30px;
`


export const MainResultImg = styled.img`
  width: 580px;
  height: 580px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  :hover {
    transform: scale(1.010);
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

