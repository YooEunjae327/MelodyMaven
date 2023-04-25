import { useEffect, useState} from "react"
import NavBar from "../common/NavBar/NavBar"
import { MainPageContainer, MainPageRecommendKrWrap, MainPageRecommendForm, MainPageSmallIntroduce, MainPageUrlButton, MainPageUrlInput, MaingPageRecommendTitle } from "./style"
import MainExplain from "./MainExplain/MainExplain"
import axios from "axios"

const Main = () => {
    const [number, setNumber] = useState(0)
    const [introduce, setIntroduce] = useState("%")
    const [fiSe, setFiSe] = useState(true) 
    const firstSay = ' I made this site using YouTube search API and chat GPT. It was a school project '
    const secondSay = ' This website recommends similar songs when you type songs! '

    const urlValue = (event: any) => {
      event.preventDefault()
      console.log(event.target.value.value)

        axios
          .get(`http://localhost:4000/recommend?url=${event.target.value.value}`)
          .then((Response) => {
            let a = Response.data.list[0].text
            const b = a.split('.')
            console.log(Response.data.list[0].text)
            console.log(b)
          })
          .catch((Error) => {
            console.log(Error)
          })
    }

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
          <MaingPageRecommendTitle>
            Music Recommendation Systems
          </MaingPageRecommendTitle>
          <MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
          <MainPageRecommendForm onSubmit={urlValue}>
            <MainPageUrlInput name="value"  placeholder="Please put in a YouTube link here.." />
            <MainPageUrlButton type="submit">click</MainPageUrlButton>
          </MainPageRecommendForm>
        </MainPageContainer>
        <MainExplain />
      </>
    ) 
}

export default Main
