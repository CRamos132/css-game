import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import Body from '../components/atoms/Body'

import Button from '../components/atoms/Button'
import MenuNav from '../components/atoms/MenuNav'

const Logo = styled.img`
  height: auto;
  width: 200px;
  margin: auto;
`

const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 10vh auto 32px;
`

export default function Home() {
  const { push } = useRouter()
  return (
    <Body>
      <LogoWrapper>
        <Logo src="/imgs/logo.png" alt="dinamite com texto escrito bomb" />
      </LogoWrapper>
      <MenuNav>
        <Button
          onClick={() => {
            push('/intro')
          }}
        >
          Jogar
        </Button>
        <Button
          onClick={() => {
            push('/como-jogar')
          }}
        >
          Como jogar
        </Button>
      </MenuNav>
    </Body>
  )
}
