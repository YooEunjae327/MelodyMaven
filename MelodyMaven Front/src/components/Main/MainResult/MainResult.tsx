import { MainExplainContainer } from "../MainExplain/style"
import { MainResultContainer, MainResultImg, MainResultImgInfo, MainResultImgWrap, MainResultRecommendSongs } from "./style"


const MainResult = () => {
    return (
      <MainResultContainer>
        <MainResultImgWrap>
          <MainResultImg src="https://i.ytimg.com/vi/h_XDmyz--0w/hqdefault.jpg" />
          <MainResultImgInfo>BoyWithUke</MainResultImgInfo>
        </MainResultImgWrap>

        <MainResultRecommendSongs>sad</MainResultRecommendSongs>
      </MainResultContainer>
    )
}

export default MainResult