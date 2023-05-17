import { MainExplainContainer, MainExplainInfo, MainExplainWrap, MainExplainTitle, MainExplainYouTubeLogo, MainExplainRightTitle, MainExplainMouse } from "./style"
import { useState } from "react"

const MainExplain = () => {

    const [xy, setXy] = useState({x : null, y : null})
    const [mouse, setMouse] = useState(false)

    const xyHandler = (e: { clientX: any; clientY: any }) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      setXy({x : mouseX, y : mouseY})
    }

    const mouseExists = () => {
        setMouse(true)
    }

    const mouseSEx = () => {
      setMouse(false)
    }
    
    return (
      <MainExplainContainer onMouseLeave={mouseSEx}  onMouseOver={mouseExists} onMouseMove={xyHandler}>
        {mouse === true ? <MainExplainMouse
          style={{
            transform: `translate(${xy.x}px, ${xy.y}px)`,
          }}
        /> : <> </> }
     
        <MainExplainWrap>
          <MainExplainTitle>#EXPLAIN</MainExplainTitle>
          <MainExplainInfo>
            This project is currently under development. Therefore, please use
            it for fun because it is still immature. Also, there is a
            possibility that the result value is strange and that the URL you
            received is not a song, but they will recommend it. These are to be
            resolved later. That was a long introduction. But there's not much
            to it If you just put in the YouTube URL you want, it's all you need
            to recommend. Please look forward to spotify from now on. Oh, and
            the reason why I made this is simple. It's just that I like songs
            and I wanted to get recommendations. For your information, I used
            Google Search api and open ai. :)
          </MainExplainInfo>
        </MainExplainWrap>

        <MainExplainWrap>
          <MainExplainRightTitle>#TEST</MainExplainRightTitle>
          <MainExplainInfo>
            This project is currently under development. Therefore, please use
            it for fun because it is still immature. Also, there is a
            possibility that the result value is strange and that the URL you
            received is not a song, but they will recommend it. These are to be
            resolved later. That was a long introduction. But there's not much
            to it If you just put in the YouTube URL you want, it's all you need
            to recommend. Please look forward to spotify from now on. Oh, and
            the reason why I made this is simple. It's just that I like songs
            and I wanted to get recommendations. For your information, I used
            Google Search api and open ai. :)
          </MainExplainInfo>
        </MainExplainWrap>
      </MainExplainContainer>
    )
}

export default MainExplain