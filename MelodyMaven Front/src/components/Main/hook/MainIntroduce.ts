import { useEffect, useState } from 'react'

// Movement font function
const useChangeSay = () => {
  const [number, setNumber] = useState(0)
  const [introduce, setIntroduce] = useState('')
  const [fiSe, setFiSe] = useState(false)

  const firstSay =
    ' I made this site using YouTube search API and Spotify API. It was a school project '
  const secondSay =
    ' This website recommends similar songs when you type songs! '

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

  return { introduce }
}

export default useChangeSay