import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import Body from '../components/atoms/Body'
import Button from '../components/atoms/Button'
import CardTitle from '../components/atoms/CardTitle'
import MenuNav from '../components/atoms/MenuNav'
import Card from '../components/molecules/Card'
import Video from '../components/atoms/Video'
import { useState } from 'react'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 90vw;
  max-width: 400px;
  border-radius: 16px;
  margin: auto;
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 15px;
`

export default function EndGame() {
  const [finished, setFinished] = useState(false)
  const { query, push } = useRouter()
  const { score } = query
  return (
    <Body variant="laranja">
      {!finished && <Video video={`/videos/${score > 10 ? 'success' : 'fail'}.mp4`} onEnd={()=>{setFinished(true)}} />}
      {finished && (
        <>
        <Wrapper>
          <CardTitle>Você fez</CardTitle>
          <Card>
            <CardTitle>{score} pontos</CardTitle>
          </Card>
          <CardTitle>nessa rodada</CardTitle>
        </Wrapper>
        <MenuNav>
          <Button
            variant="red"
            onClick={() => {
              push('/game')
            }}
          >
            Jogar
          </Button>
          <Button
            variant="red"
            onClick={() => {
              push('/')
            }}
          >
            Sair
          </Button>
        </MenuNav>
      </>
      )}
    </Body>
  )
}
