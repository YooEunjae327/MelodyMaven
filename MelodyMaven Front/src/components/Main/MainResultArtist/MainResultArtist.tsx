import { MainPageResultArtist, MainPageResultImg, MainPageResultInfo, MainPageResultInfoName, MainPageResultInfoWrap, MainPageResultWrap } from "./style"

const MainResultArtist = () => {

    return (
        <MainPageResultWrap>
          <MainPageResultArtist>
            {/* <MainPageResultPlayImg></MainPageResultPlayImg> */}
            <MainPageResultImg src="https://i.scdn.co/image/ab6761610000e5ebb454780a41c24b4356dd7a4b"></MainPageResultImg>
            <MainPageResultInfoWrap>
              <MainPageResultInfoName>Jame Berry</MainPageResultInfoName>
              <MainPageResultInfo>Artsits</MainPageResultInfo>
            </MainPageResultInfoWrap>
          </MainPageResultArtist>
          <MainPageResultArtist>
            <MainPageResultImg src="https://i.scdn.co/image/ab6761610000e5eb58213b71993e69232afcef7e"></MainPageResultImg>
            <MainPageResultInfoWrap>
              <MainPageResultInfoName>Jame Mevuey</MainPageResultInfoName>
              <MainPageResultInfo>Artsits</MainPageResultInfo>
            </MainPageResultInfoWrap>
          </MainPageResultArtist>
        </MainPageResultWrap>
    )
}

export default MainResultArtist