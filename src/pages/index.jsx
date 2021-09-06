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
export default function Intro() {
  const { push } = useRouter()
  return (
    <Body variant="laranja">
      <MenuNav>
        <Card>
          <CardTitle>História</CardTitle>
          <CardInformation>
            Matt se encontra em um quarto escuro, ansioso e com medo. O 
            estudante de programação foi preso neste quarto pois colou na sua 
            última prova de POO e a máfia da programação mundial o capturou. 
            Ele encontra uma página de papel com as instruções do jogo e então 
            se depara com a bomba. A salvação do mundo da programação (e da dele
             mesmo) está em suas mãos.
          </CardInformation>
        </Card>
        <Button
          variant="red"
          onClick={() => {
            push('/menu')
          }}
        >
          Entendi
        </Button>
      </MenuNav>
    </Body>
  )
}
