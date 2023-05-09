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

        <MainResultImgWrap >
          <MainResultInfo>
            <MainResultInfoDetailTitle>#Main</MainResultInfoDetailTitle>
            <MainResultInfoDetail>
              This is the song you want to recommend. If not, please retry or
              inquire. From the bottom, there are 10 songs similar to this song.
              I want you to check and find the song you want song
            </MainResultInfoDetail>
          </MainResultInfo>
          <MainResultLine></MainResultLine>

          <MainResultImgContainer>
            <MainResultImg src="https://img.youtube.com/vi/5NV6Rdv1a3I/maxresdefault.jpg" />
            <MainResultImgInfo>{title}</MainResultImgInfo>
            <MainResultImgInfoDetail>{made}</MainResultImgInfoDetail>

            <MainResultUrlContainer>
              <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
              <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
            </MainResultUrlContainer>
          </MainResultImgContainer>
        </MainResultImgWrap>

        {musicInfo.info.map((value : any, index : number) => {
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

