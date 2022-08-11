import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/hero-image.svg'

import device from '../screen-sizes/devices'

const Container = styled.div`
    position: relative;
    background-color: var(--white);
    display: none;

    @media ${device.laptop}{
        display: block;
    }
`

const HeroImage = styled.img`
    width: 100%;
`

const HeroText = styled.div`
    position: absolute;
    width: 546px;

    top: 50%;
    right: 7rem;

    transform: translateY(-50%);

    & h1{
        font-size: 4rem;
        margin-bottom: 2rem;
        line-height: 120%;
        letter-spacing: 0.003em;
    }

    & p{
        font-size: 1rem;
        line-height: 125%;
        letter-spacing: 0.005em;
    }

    @media ${device.laptopL}{
        width: 40%;
    }
`

const HeroSection = () => {
  return (
    <Container>
        <HeroText>
            <h1>Home Shopping, Your Choice!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </HeroText>
        <HeroImage src={heroImage} alt="" />
    </Container>
  )
}

export default HeroSection