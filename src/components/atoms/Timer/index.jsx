import styled from 'styled-components'

const Clock = styled.h2`
  margin-top: 12px;
  display: inline-block;
  font-size: 2rem;
  padding: 12px;
  border-radius: 16px;
  color: white;
  min-width: 120px;
  text-align: center;
  font-family: 'Wallpoet';
  background-color: ${props =>
    props.background ? props.background : '#000000'};
  transition: 0.5s;
`

export default function Timer({ tempo, background }) {
  return <Clock background={background}>{tempo}</Clock>
}
