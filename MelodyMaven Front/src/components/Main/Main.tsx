import { useEffect, useState } from 'react'
import NavBar from '../common/NavBar/NavBar'
import {
  MainPageContainer,
  MainPageRecommendKrWrap,
  MainPageRecommendForm,
  MainPageSmallIntroduce,
  MainPageUrlButton,
  MainPageUrlInput,
  MaingPageRecommendTitle,
} from './style'
import MainExplain from './MainExplain/MainExplain'
import axios from 'axios'
import MainResult from './MainResult/MainResult'
import { Format } from './MainResult/MainResultFormat'
import MainResultArtist from './MainResultArtist/MainResultArtist'

const Main = () => {
  // Movement font function
  const [number, setNumber] = useState(0)
  const [introduce, setIntroduce] = useState('')
  const [fiSe, setFiSe] = useState(true)
  const [urlData, setUrlData] = useState(false) // 등록 했을때
  const [artist, setAritst] = useState([]) // 등록하고 아티스트 정보
  const firstSay =
    ' I made this site using YouTube search API and Spotify API. It was a school project '
  const secondSay =
    ' This website recommends similar songs when you type songs! '

  const urlValue = (event : any) => {
    event.preventDefault()
    console.log(localStorage.getItem('token'))
    console.log(event.target.value.value)
    if (!localStorage.getItem('token')) {
      axios
        .get(`http://localhost:4000/recommend/spotify/token`)
        .then((Response) => {
          //setUrlData(Response.data.list[0].text.split('.'))
          localStorage.setItem('token', Response.data.token)

          axios
            .get(
              `http://localhost:4000/recommend/spotify?artist=${
                event.target.value.value
              }&token=${localStorage.getItem('token')}`
            )
            .then((Response) => {
              console.log(Response.data.items)
              setAritst(Response.data.items)
              setUrlData(true)
            })
            .catch((Error) => {
              console.log(Error)
            })
        })
        .catch((Error) => {
          console.log(Error)
        })
    } else {
      axios
        .get(
          `http://localhost:4000/recommend/spotify?artist=${
            event.target.value.value
          }&token=${localStorage.getItem('token')}`
        )
        .then((Response) => {
          console.log(Response.data.items)
          setAritst(Response.data.items)
          setUrlData(true)
        })
        .catch((Error) => {
          console.log(Error)
          axios
            .get(`http://localhost:4000/recommend/spotify/token`)
            .then((Response) => {
              //setUrlData(Response.data.list[0].text.split('.'))
              localStorage.setItem('token', Response.data.token)

              axios
                .get(
                  `http://localhost:4000/recommend/spotify?artist=${
                    event.target.value.value
                  }&token=${localStorage.getItem('token')}`
                )
                .then((Response) => {
                  console.log(Response.data.items)
                  setAritst(Response.data.items)
                  setUrlData(true)
                })
                .catch((Error) => {
                  console.log(Error)
                })
            })
            .catch((Error) => {
              console.log(Error)
            })
        })
    }
  }

  useEffect(() => {
    if (fiSe === true) {
      if (firstSay.length > introduce.length) {
        setTimeout(() => {
          setIntroduce(introduce + firstSay[number])
        }, 100)
        setNumber(number + 1)
      } else if (firstSay.length === introduce.length) {
        setTimeout(() => {
          setIntroduce('')
        }, 2000)
        setNumber(0)
        setFiSe(false)
      }
    } else {
      if (secondSay.length > introduce.length) {
        setTimeout(() => {
          setIntroduce(introduce + secondSay[number])
        }, 100)
        setNumber(number + 1)
      } else if (secondSay.length === introduce.length) {
        setTimeout(() => {
          setIntroduce('')
        }, 2000)
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
        {!urlData ? (
          <>
          <MaingPageRecommendTitle>MUSIC.MATCHMAKER</MaingPageRecommendTitle>
          <MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
            <MainPageRecommendForm onSubmit={urlValue}>
              <MainPageUrlInput
                name="value"
                placeholder="Please enter the artist you want here.."
              ></MainPageUrlInput>
              <MainPageUrlButton type="submit">Submit</MainPageUrlButton>
            </MainPageRecommendForm>
          </>
        ) : (
          <>
            <MainResultArtist info={artist} />
            {/* <MainResult info={urlData} /> */}
          </>
        )}
      </MainPageContainer>
      <MainExplain />
    </>
  )
}

export default Main
