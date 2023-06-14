import axios from 'axios'
import { useCallback, useState } from 'react'

export const useFindArtists = () => {
  const [value, setValue] = useState([])
  const [error, setError] = useState(false)

  const fetchValue = useCallback(
    (e: any) => {
      axios
        .get(
          `http://localhost:4000/recommend/spotify?artist=${
            e.target.value.value
          }&token=${localStorage.getItem('token')}`
        )
        .then((res) => {
          if(res.data.items.length === 0) {
            setError(true)
          }
          else {
            setValue(res.data.items)
          }
          
        })
        .catch((e) => {
          console.error(e)
          tokenCreate(true)
          fetchValue(e)
        })

    },
    [value, error]
  )
  return [value, error, fetchValue]
}



export const tokenCreate = async (expire : boolean) => {
  if(expire) localStorage.clear()

  try {
    const Response = await axios.get(
      `http://localhost:4000/recommend/spotify/token`
    )
    //setUrlData(Response.data.list[0].text.split('.'))
    localStorage.setItem('token', Response.data.token)
  } catch (Error) {
    return null
  }
}
