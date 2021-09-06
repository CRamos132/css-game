import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 24px;
  background-color: ${props => props.theme.colors[props.variant || 'orange']};
  min-width: 300px;
  font-size: 2rem;
  font-family: 'Wallpoet';
  color: white;
  padding: 14px 12px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
`

export default Button
