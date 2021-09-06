import Body from '../components/atoms/Body'
// import ReactPlayer from 'react-player'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Video() {
  const [play, setPlay] = useState(false)
  const { push } = useRouter()
  return (
    <Body>
      {/* <ReactPlayer
        url="/videos/success.mp4"
        controls={true}
        playing={play}
        width={394}
        height={700}
        onReady={() => {
          setPlay(true)
        }}
        onEnded={() => {
          push('/')
        }}
      /> */}
    </Body>
  )
}
