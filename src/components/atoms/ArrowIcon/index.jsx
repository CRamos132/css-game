import { useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    align-items: center;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: 0.2s;
`

export default function ArrowIcon({isOpen}) {
    useEffect(()=>{console.log(isOpen)},[isOpen])
    return (
        <Wrapper isOpen={isOpen}>
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5078 0.152344L17.5 2.14453L9 10.6445L0.5 2.14453L2.49219 0.152344L9 6.66016L15.5078 0.152344Z" fill="white"/>
            </svg>
        </Wrapper>

    )
}