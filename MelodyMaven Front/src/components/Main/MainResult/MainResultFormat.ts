import axios from "axios"


export const Format = (urlData : any) => {

    console.log(urlData[1].split("\n"))
    // console.log(urlData)
    // eslint-disable-next-line array-callback-return
    urlData.map((value : String, index : number) => {
        let music =  value.split('\n')
        console.log(music[0].trim())
        
        axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=받은키복사`
        )
    })
}
    