import styled from 'styled-components'

const GameButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: black;
  border: 2px solid ${props => props.theme.colors.lightGray};
  font-size: 1rem;
  font-family: 'Wallpoet';
  color: white;
  padding: 14px 12px;
  cursor: pointer;
`

export default GameButton
