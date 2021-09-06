import { useState } from "react"
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
    return (
        <Wrapper>
            <ReactPlayer
                url={video}
                controls={true}
                playing={play}
                width={394}
                height={700}
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