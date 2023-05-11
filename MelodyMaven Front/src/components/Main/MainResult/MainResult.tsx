import { useEffect, useState } from "react"
import { MainExplainContainer } from "../MainExplain/style"
import { MainResultBottomLine, MainResultBottomLineButton, MainResultBottomLineWrap, MainResultContainer, MainResultImg, MainResultImgContainer, MainResultImgInfo, MainResultImgInfoDetail, MainResultImgWrap, MainResultInfo, MainResultInfoDetail, MainResultInfoDetailTitle, MainResultLine, MainResultRecommendSongs, MainResultSpotifyWrap, MainResultUrlContainer, MainResultYoutubeWrap,  } from "./style"


const MainResult = (musicInfo : any) => {
    const title = 'Out of Reach'
    const made = 'BoywithUke'

    //console.log(test.info[7])

    const MoveToTop = () => {
        window.scrollTo({top : 0, behavior: 'smooth'})
    }


    return (
      <MainResultContainer>
        <MainResultImgWrap>
          <MainResultInfo>
            <MainResultInfoDetailTitle>#Main</MainResultInfoDetailTitle>
            <MainResultInfoDetail>
              This is the artist you searched. But if it's different, please
              contact us. There are also artists like him below. If you like it,
              you can enjoy the music related to them. Good luck!
            </MainResultInfoDetail>
          </MainResultInfo>
          <MainResultLine></MainResultLine>

          <MainResultImgContainer>
            <MainResultImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b" />
            <MainResultImgInfo>jamie berry</MainResultImgInfo>
            <MainResultImgInfoDetail>electro swing</MainResultImgInfoDetail>

            <MainResultUrlContainer>
              <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
              <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
            </MainResultUrlContainer>
          </MainResultImgContainer>
        </MainResultImgWrap>

        {musicInfo.info.map((value: any, index: number) => {
          return (
            <MainResultImgWrap>
              <MainResultInfo>
                <MainResultInfoDetailTitle>Reccomend</MainResultInfoDetailTitle>
                <MainResultInfoDetailTitle>Music</MainResultInfoDetailTitle>
                <MainResultInfoDetailTitle>#{index}</MainResultInfoDetailTitle>
              </MainResultInfo>
              <MainResultLine></MainResultLine>

              <MainResultImgContainer>
                <MainResultImg src="https://img.youtube.com/vi/5NV6Rdv1a3I/maxresdefault.jpg" />
                <MainResultImgInfo>{value}</MainResultImgInfo>
                <MainResultImgInfoDetail>{made}</MainResultImgInfoDetail>

                <MainResultUrlContainer>
                  <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
                  <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
                </MainResultUrlContainer>
              </MainResultImgContainer>
            </MainResultImgWrap>
          )
        })}

        <MainResultBottomLineWrap>
          <MainResultBottomLineButton onClick={MoveToTop}>
            If you want to go to the top, enjoy it here
          </MainResultBottomLineButton>
          <MainResultBottomLine />
        </MainResultBottomLineWrap>
      </MainResultContainer>
    )
}

export default MainResult

// https://img.youtube.com/vi/8UVNT4wvIGY/maxresdefault.jpg

