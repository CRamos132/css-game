import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function VideoPlayer({video, onEnd}){
    const [play, setPlay] = useState(false)
    const [width, setWidth] = useState(394)
    const [height, setHeight] = useState(700)
    useEffect(()=>{
        const {innerWidth} = window.window
        setWidth(innerWidth > 400 ? 394 : innerWidth)
        setHeight(innerWidth > 400 ? 700 : innerWidth*1.775)
    },[])
    return (
        <Wrapper>
            <ReactPlayer
                url={video}
                controls={true}
                playing={play}
                width={width}
                height={height}
                onReady={() => {
                    setPlay(true)
                }}
                onEnded={() => {
                    onEnd?.()
                }}
            />
        </Wrapper>
    )
}