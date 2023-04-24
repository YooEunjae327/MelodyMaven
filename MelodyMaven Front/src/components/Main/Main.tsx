import { useEffect, useState} from "react"
import NavBar from "../common/NavBar/NavBar"
import { MainPageContainer, MainPageRecommendKrWrap, MainPageRecommendWrap, MainPageSmallIntroduce, MainPageUrlButton, MainPageUrlInput } from "./style"
import MainExplain from "./MainExplain/MainExplain"
import axios from "axios"

const Main = () => {

useEffect(() => {
    axios
      .get('http://localhost:4000/recommend?url=https://www.youtube.com/watch?v=pbJxneQzhKU')
      .then((Response) => {
        console.log(Response.data)
      })
      .catch((Error) => {
        console.log(Error)
      })
}, [])


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

          <MainPageRecommendWrap>I recommend a song that's similar to your favorite song.</MainPageRecommendWrap>
          <MainPageRecommendKrWrap>좋아하는 노래와 비슷한 노래를 추천받아 보세요.</MainPageRecommendKrWrap>
          <MainPageRecommendWrap>
             <MainPageUrlInput placeholder="Please put in a YouTube link here.." />
             <MainPageUrlButton>click</MainPageUrlButton>
          </MainPageRecommendWrap>
        </MainPageContainer>
        <MainExplain />
      </>
    ) 
}

export default Main
