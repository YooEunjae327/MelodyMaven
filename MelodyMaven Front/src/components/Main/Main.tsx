import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from '../common/NavBar/NavBar'
import {
  MainPageContainer,
  MainPageErrorContent,
  MainPageErrorImg,
  MainPageErrorWrap,
  MainPageRecommendForm,
  MainPageSmallIntroduce,
  MainPageUrlButton,
  MainPageUrlInput,
  MaingPageRecommendTitle,
} from './style'
import MainExplain from './MainExplain/MainExplain'
import MainResultArtist from './MainResultArtist/MainResultArtist'
import { tokenCreate, useFindArtists } from './hook/MainAxios'
import useChangeSay from './hook/MainIntroduce'
import { useLocation, useNavigate } from 'react-router-dom'

const Main = () => {
  // Typing function
  const { introduce } = useChangeSay()

  // Find Artsits funtion
  const [checkArtist, setCheckArtist] = useState(false)
  const [value, error, fetchValue] = useFindArtists()

  // Error line Ref
  const errorRef = useRef<HTMLInputElement>(null)

  const history = useNavigate()
  const location = useLocation()

  const findArtists = (e: any) => {
    e.preventDefault()

    history(`?artist=${e.target.value.value}`)
  }

  useEffect(() => {
    tokenCreate(false)
  }, [])

  useEffect(() => {
    if(error) {
      if(errorRef.current != null) {
        errorRef.current.style.borderColor = 'red'
      }
    }
  }, [error] )

  useEffect(() => {
    //@ts-expect-error
    if (value.length !== 0 || error) {
      setCheckArtist(true)
    }
  }, [value])

  useEffect(() => {

    if (new URLSearchParams(window.location.search).get('artist') !== null) {
      //@ts-expect-error
      fetchValue(new URLSearchParams(window.location.search).get('artist'))
    } else {
      setCheckArtist(false)
    }

    // console.log(new URLSearchParams(window.location.search).get('aritst') )
  }, [location])

  return (
    <>
      <NavBar />
      <MainPageContainer>
        {!checkArtist ? (
          <>
            <MaingPageRecommendTitle>MUSIC.MATCHMAKER</MaingPageRecommendTitle>
            <MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
            <MainPageRecommendForm onSubmit={findArtists}>
              <MainPageUrlInput
                name="value"
                placeholder="Please enter the artist you want here.."
                ref={errorRef}
              ></MainPageUrlInput>
              <MainPageUrlButton type="submit">Submit</MainPageUrlButton>
            </MainPageRecommendForm>
            {error ? (
              <>
                <MainPageErrorWrap>
                  <MainPageErrorImg></MainPageErrorImg>
                  <MainPageErrorContent>
                    It's an artist that doesn't exist.
                  </MainPageErrorContent>
                </MainPageErrorWrap>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <MainResultArtist info={value} />
            {/* <MainResult info={urlData} /> */}
          </>
        )}
      </MainPageContainer>

      {!checkArtist ? (
        <>
          <MainExplain />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Main
