import axios from 'axios'
import { useState } from 'react'

export const useFindArtists = async (e: any) => {   
  //const [value, setValue] = useState([])

  await axios.get(
    `http://localhost:4000/recommend/spotify?artist=${
      e.target.value.value
    }&token=${localStorage.getItem('token')}`
  )
  .then((res) => {
    console.log(res)
    //setValue(res.data.items)
  })
  .catch((e) => {
    console.error(e)

  })
  
}

export const tokenAccess = async () => {
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
