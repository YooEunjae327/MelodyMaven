import { FormEvent, useEffect, useState } from 'react'
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
import { tokenCreate, useFindArtists } from './hook/MainAxios'
import useChangeSay from './hook/MainIntroduce'

const Main = () => {
  // Typing function
  const { introduce } = useChangeSay()

  // Find Artsits funtion
  const [checkArtist, setCheckArtist] = useState(false)
  const [value, error, fetchValue] = useFindArtists()
  const [noneError, setNoneError] = useState(false)


  const findArtists = (e: any) => {
    e.preventDefault()

    if (!localStorage.getItem('token')) {
      tokenCreate(false)
    } else {
      //@ts-expect-error
      fetchValue(e)
      
    }
  }

  useEffect(() => {
    //@ts-expect-error
    console.log(value.length)
    //@ts-expect-error
    if (value.length !== 0) {
      setCheckArtist(true)
    }
  }, [value])


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
