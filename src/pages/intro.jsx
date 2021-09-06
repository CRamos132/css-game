import { useRouter } from 'next/dist/client/router'
import Body from '../components/atoms/Body'
import Video from '../components/atoms/Video'

export default function IntroVideo() {
  const {push} = useRouter()
  return (
    <Body hidePadding>
      <Video video='/videos/intro.mp4' onEnd={()=>{push('/game')}} />
    </Body>
  )
}
