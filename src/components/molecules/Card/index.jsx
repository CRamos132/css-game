import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../atoms/ArrowIcon'
import CardContent from '../../atoms/CardContent'
import CardInformation from '../../atoms/CardInformation'
import CardTitle from '../../atoms/CardTitle'

const InnerCard = styled.div`
  border: 15px solid ${({ theme }) => theme.colors.gray};
  background-color: black;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px;
`

export default function Card({
  item,
  children,
  fixedHeight,
  cursor
}) {
  const [hide, setHide] = useState(false)

  return (
    <CardContent
      cursor={cursor}
      fixedHeight={fixedHeight}
      onClick={() => {
        setHide(oldState => !oldState)
      }}
    >
      <InnerCard>
        {item && (
          <>
            <CardTitle>{item.name}</CardTitle>
            {!hide && <CardInformation>{item.description}</CardInformation>}
            <ArrowIcon isOpen={!hide} />
          </>
        )}
        {children}
      </InnerCard>
    </CardContent>
  )
}
