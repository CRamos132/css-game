import { useEffect, useState } from 'react'

export default function useTimer() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(oldState => (oldState >= 60 ? 0 : oldState + 1))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  const subtract = (amount = 5) => {
    setTime(oldState => oldState + amount)
  }
  return [time, subtract]
}
