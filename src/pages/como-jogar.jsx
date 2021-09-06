import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import Body from '../components/atoms/Body'
import Button from '../components/atoms/Button'
import CardTitle from '../components/atoms/CardTitle'
import MenuNav from '../components/atoms/MenuNav'
import Card from '../components/molecules/Card'

const CardInformation = styled.article`
  font-size: 1.2rem;
  font-family: 'Quicksand';
`
export default function ComoJogar() {
  const { push } = useRouter()
  return (
    <Body variant="laranja">
      <MenuNav>
        <Card>
          <CardTitle>Instruções</CardTitle>
          <CardInformation>
            Você tem X segundos para desarmar a bomba com seu conhecimento em
            CSS. Clique na opção &apos;position&apos; se você acha que o item é
            um position; Clique na opção &apos;display&apos; se você acha que o
            item é um display; Clique na lixeira se você acha que o item não faz
            parte de nenhum desses dois grupos.
          </CardInformation>
        </Card>
        <Button
          variant="red"
          onClick={() => {
            push('/game')
          }}
        >
          Jogar
        </Button>
      </MenuNav>
    </Body>
  )
}
