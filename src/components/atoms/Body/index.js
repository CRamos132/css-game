/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const Body = styled.main`
  background: url(${props => `/imgs/${props.variant || 'vermelho'}_desktop.jpg`})
    no-repeat fixed center;
  height: 100vh;
  padding-top: 42px;
  @media (max-width: 700px) {
    background: url(${props => `/imgs/${props.variant || 'vermelho'}_mobile.jpg`})
    no-repeat fixed center;
  }
`

export default Body
