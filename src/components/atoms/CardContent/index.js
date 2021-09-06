import styled from 'styled-components'

const CardContent = styled.button`
  position: relative;
  background-color: #fff;
  width: 100%;
  border: 15px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  max-width: 400px;
  height: ${props => (props.fixedHeight ? '300px' : '')};
  border-radius: 12px;
`

export default CardContent
