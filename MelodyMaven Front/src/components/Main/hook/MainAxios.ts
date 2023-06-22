import axios from 'axios'
import { useCallback, useState } from 'react'

export const useFindArtists = () => {
  const [value, setValue] = useState([])
  const [error, setError] = useState(false)

  const fetchValue = useCallback(
    (query: String) => {
      axios
        .get(
          `/recommend/spotify?artist=${query}&token=${localStorage.getItem(
            'token'
          )}`
        )
        .then((res) => {
          if (res.data === '') {
            tokenCreate(true)
            fetchValue(query)
          } else {
            if (res.data.items.length === 0) {
              setError(true)
            } else {
              setValue(res.data.items)
            }
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    [value, error]
  )
  return [value, error, fetchValue]
}

export const tokenCreate = async (expire: boolean) => {
  try {
    if (localStorage.getItem('token') !== null && !expire) return
    const Response = await axios.get(
      `/recommend/spotify/token`
    )

    localStorage.setItem('token', Response.data.token)

    return
  } catch (Error) {
    return null
  }
}
