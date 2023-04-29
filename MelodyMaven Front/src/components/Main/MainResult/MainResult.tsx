import { useEffect, useState } from "react"
import { MainExplainContainer } from "../MainExplain/style"
import { MainResultBottomLine, MainResultBottomLineButton, MainResultBottomLineWrap, MainResultContainer, MainResultImg, MainResultImgContainer, MainResultImgInfo, MainResultImgInfoDetail, MainResultImgWrap, MainResultInfo, MainResultInfoDetail, MainResultInfoDetailTitle, MainResultLine, MainResultRecommendSongs, MainResultSpotifyWrap, MainResultUrlContainer, MainResultYoutubeWrap,  } from "./style"


const MainResult = () => {
    const [titleNumber, setTitleNumber] = useState(0)
    const [madeNumber, setMadeNumber] = useState(0)
    const [viewTtile, setViewTtile] = useState("")
    const [viewMade, setViewMade] = useState("")
    const title = 'Out of Reach'
    const made = 'BoywithUke'

    const MoveToTop = () => {
        window.scrollTo({top : 0, behavior: 'smooth'})
    }

    useEffect(() => {
        if(title.length !== titleNumber) {
            setTimeout(() => {setViewTtile(viewTtile + title[titleNumber])}, 200 )
            setTitleNumber(titleNumber + 1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewTtile])

    useEffect(() => {
        if(made.length !== madeNumber) {
            setTimeout(() => {setViewMade(viewMade + made[madeNumber])}, 200 )
            setMadeNumber(madeNumber + 1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMade])

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
            <MainResultImgInfo>{viewTtile}</MainResultImgInfo>
            <MainResultImgInfoDetail>{viewMade}</MainResultImgInfoDetail>

            <MainResultUrlContainer>
              <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
              <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
            </MainResultUrlContainer>
          </MainResultImgContainer>
        </MainResultImgWrap>

        <MainResultImgWrap>
          <MainResultInfo>
            <MainResultInfoDetailTitle>Reccomend</MainResultInfoDetailTitle>
            <MainResultInfoDetailTitle>Music</MainResultInfoDetailTitle>
            <MainResultInfoDetailTitle>#1</MainResultInfoDetailTitle>
          </MainResultInfo>
          <MainResultLine></MainResultLine>

          <MainResultImgContainer>
            <MainResultImg src="https://img.youtube.com/vi/5NV6Rdv1a3I/maxresdefault.jpg" />
            <MainResultImgInfo>{viewTtile}</MainResultImgInfo>
            <MainResultImgInfoDetail>{viewMade}</MainResultImgInfoDetail>

            <MainResultUrlContainer>
              <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
              <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
            </MainResultUrlContainer>
          </MainResultImgContainer>
        </MainResultImgWrap>

        <MainResultImgWrap>
          <MainResultInfo>
            <MainResultInfoDetailTitle>Reccomend</MainResultInfoDetailTitle>
            <MainResultInfoDetailTitle>Music</MainResultInfoDetailTitle>
            <MainResultInfoDetailTitle>#2</MainResultInfoDetailTitle>
          </MainResultInfo>
          <MainResultLine></MainResultLine>

          <MainResultImgContainer>
            <MainResultImg src="https://img.youtube.com/vi/5NV6Rdv1a3I/maxresdefault.jpg" />
            <MainResultImgInfo>{viewTtile}</MainResultImgInfo>
            <MainResultImgInfoDetail>{viewMade}</MainResultImgInfoDetail>

            <MainResultUrlContainer>
              <MainResultYoutubeWrap>YouTube</MainResultYoutubeWrap>
              <MainResultSpotifyWrap>Spotify</MainResultSpotifyWrap>
            </MainResultUrlContainer>
          </MainResultImgContainer>
        </MainResultImgWrap>

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

