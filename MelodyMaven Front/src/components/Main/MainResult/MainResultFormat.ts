import axios from "axios"
import { redirect } from "react-router-dom"


export const Format = (urlData : any) => {

    console.log(urlData)
    // eslint-disable-next-line array-callback-return
    urlData.map((value : String, index : number) => {
        let music =  value.split('\n')
        console.log(music[0].trim())
        // console.log(process.env.REACT_APP_API_KEY)
        if(index > 2)
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${music[0].trim()}&maxResults=1&key=${
              process.env.REACT_APP_API_KEY
            }`
          )
          .then((Response) => {
            console.log(Response)
          })
          .catch((Error) => {
            console.log(Error)
            redirect('/')
          })
    })
}
    