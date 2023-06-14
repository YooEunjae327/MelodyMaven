import { useEffect, useLayoutEffect, useState } from 'react'
import NavBar from '../common/NavBar/NavBar'
import {
  MainPageContainer,
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
import { useLocation, useNavigate} from 'react-router-dom'

const Main = () => {
  // Typing function
  const { introduce } = useChangeSay()

  // Find Artsits funtion
  const [checkArtist, setCheckArtist] = useState(false)
  const [value, error, fetchValue] = useFindArtists()
  const [query, setQuery] = useState("")


  const history = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log(query)
  }, [query])

  useEffect(() => {
    console.log(location)
    setQuery(new URLSearchParams(window.location.search).get('artist') ?? '')
    // console.log(new URLSearchParams(window.location.search).get('aritst') )
  }, [location])

  const findArtists = (e: any) => {
    e.preventDefault()

    if (!localStorage.getItem('token')) {
      tokenCreate(false)
    } else {
      //@ts-expect-error
      fetchValue(e)
    }

    history(`?artist=${e.target.value.value}`)
  }

  useEffect(() => {
    //@ts-expect-error
    if (value.length !== 0) {
      // setCheckArtist(true)
    }
  }, [value])


  return (
    <>
      <NavBar />
      <MainPageContainer>
        {!checkArtist? (
          <>
            <MaingPageRecommendTitle>MUSIC.MATCHMAKER</MaingPageRecommendTitle>
            <MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
            <MainPageRecommendForm onSubmit={findArtists}>
              <MainPageUrlInput
                name="value"
                placeholder="Please enter the artist you want here.."
              ></MainPageUrlInput>
              <MainPageUrlButton type="submit">Submit</MainPageUrlButton>
            </MainPageRecommendForm>
            {error ? (<><div>asd</div></>) : (<></>)}
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
