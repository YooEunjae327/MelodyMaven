import { useEffect, useState} from "react"
import NavBar from "../common/NavBar/NavBar"
import { MainPageContainer, MainPageRecommendWrap, MainPageSmallIntroduce, MainPageUrlInput, MainPageTitleContent, MaingPageAnalysisWrap } from "./style"

const Main = () => {
    const [number, setNumber] = useState(0)
    const [introduce, setIntroduce] = useState("%")
    const [fiSe, setFiSe] = useState(true) 
    const firstSay = ' I made this site using YouTube search API and chat GPT. It was a school project '
    const secondSay = ' This website recommends similar songs when you type songs! '

    //console.log(firstSay.substring(0, firstSay.length - 1))
    useEffect(() => {
        if(fiSe === true) {
            if(firstSay.length > introduce.length) {
            setTimeout(() => {  setIntroduce(introduce + firstSay[number]) }, 100)
            setNumber(number + 1)
            } else if(firstSay.length === introduce.length) {
                setTimeout(() => { setIntroduce("%")}, 2000)
                setNumber(0)
                setFiSe(false)
            }
        } else {
            if(secondSay.length > introduce.length) {
                setTimeout(() => { setIntroduce(introduce + secondSay[number])}, 100)
                setNumber(number + 1)
            } else if(secondSay.length === introduce.length) {
                setTimeout(() => { setIntroduce("%")}, 2000)
                setNumber(0)
                setFiSe(true)
            }
        }
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [introduce])
    
    return (
      <>
        <NavBar />
        <MainPageContainer>
          <MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
          <MainPageRecommendWrap>
              <MainPageTitleContent>
                유튜브 URL를 넣어주세요
              </MainPageTitleContent>
                <MainPageUrlInput type="text" placeholder="Please put in a YouTube link.." />
              <MaingPageAnalysisWrap>
                das
              </MaingPageAnalysisWrap>
          </MainPageRecommendWrap>
        </MainPageContainer>
      </>
    ) 
}

export default Main

//20 0
//