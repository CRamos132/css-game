import { useState, useEffect } from 'react'

import Card from '../components/molecules/Card'
import Timer from '../components/atoms/Timer'
import GameButton from '../components/atoms/GameButton'
import useTimer from '../hooks/useTimer'
import Score from '../components/atoms/Score'
import styled from 'styled-components'
import cards, { ICard } from '../assets/cards'

import shuffle from '../utils/shuffle'
import Body from '../components/atoms/Body'
import { useRouter } from 'next/dist/client/router'
import { Head } from 'next/document'

const Information = styled.div`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto 28px;
`

const Controller = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin: 24px auto;
`

const CardContainer = styled.div`
  margin: auto;
  width: 90vw;
  max-width: 400px;
  height: 300px;
  overflow: hidden;
`

export default function Home() {
  const [color, setColor] = useState('')
  const [scoreColor, setScoreColor] = useState('')
  const [activeCard, setActiveCard] = useState(0)
  const [shuffledCards, setShuffledCards] = useState()
  const [time, subtract] = useTimer()
  const [score, setScore] = useState(0)
  const { push } = useRouter()
  const ping = () => {
    setScoreColor('green')
    setTimeout(() => {
        setScoreColor('')
    }, 200)
  }
  const onSwipe = (direction) => {
    const currentCard = cards[activeCard]
    if (!currentCard) {
      return
    }
    setActiveCard(oldState => {
      if (oldState >= cards.length - 1) {
        const shuffled = shuffle(cards)
        setShuffledCards(shuffled)
        return 0
      }
      return oldState + 1
    })
    if (direction === currentCard.answer) {
      setScore(oldState => oldState + 1)
      ping()
      return
    }
    setColor('red')
    setTimeout(() => {
      setColor('')
    }, 200)
    subtract()
  }
  useEffect(() => {
    const shuffled = shuffle(cards)
    setShuffledCards(shuffled)
  }, [])
  const handleKey = (event) => {
    const handler = {
      ArrowLeft: () => {
        onSwipe('display')
      },
      ArrowRight: () => {
        onSwipe('position')
      },
      ArrowDown: () => {
        onSwipe('discart')
      }
    }
    handler[event.key]?.()
  }
  useEffect(() => {
    if (time >= 60) {
      push(`/end?score=${score}`)
    }
  }, [time])

  return (
    <div onKeyDown={handleKey}>
      <Body>
        <Information>
          <Timer background={color} tempo={time} />
          <Score background={scoreColor}>{score}</Score>
        </Information>
        <CardContainer>
          {shuffledCards && (
            <Card cursor='pointer' fixedHeight item={shuffledCards[activeCard]} />
          )}
        </CardContainer>
        <Controller>
          <GameButton
            onClick={() => {
              onSwipe('display')
            }}
          >
            Display
          </GameButton>
          <GameButton
            onClick={() => {
              onSwipe('discart')
            }}
          >
            Descartar
          </GameButton>
          <GameButton
            onClick={() => {
              onSwipe('position')
            }}
          >
            Position
          </GameButton>
        </Controller>
      </Body>
    </div>
  )
}
