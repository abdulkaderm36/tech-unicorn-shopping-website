import React from 'react'
import styled from 'styled-components'

import device from '../screen-sizes/devices'

const Container = styled.div`
    margin-top: 10rem;
    padding: 3.5rem 1rem;

    display: flex;
    justify-content: space-between;

    background-color: var(--white);

    @media ${device.laptop}{
        padding: 3.5rem 5.8rem;
    }
`
const Info = styled.div`
    display: flex;
    gap: 3.5rem;

    .image{
        display: none;
        height: 360px;
        width: 360px;
        background-color: #E2E2EA;
    }

    .info{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: 700;
    }

    @media ${device.laptop}{
        .image{
            display: block;
        }
    }

`
const Policy = styled.div`
    h1{
        font-size: 4rem;
        color: var(--primary);
        margin-bottom: 2rem;
    }

    p{
        margin-bottom: 1.5rem;
    }
`

const Links = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1rem;

    font-family: 'Merriweather', serif;

    a{
        display:flex;
        justify-content: center;
        align-items: center;


        text-decoration: none;
        color: var(--white);
        background-color: var(--primary);
        
        width: 40px;
        height: 40px;

        border-radius: 50%;
    }

    @media ${device.laptop}{
        flex-direction: row;
    }

`

const Footer = () => {

    const links = {
        'Yt': '#',
        'Fb': '#',
        'Tw': '#',
        'Ig': '#',
    }

  return (
    <Container>
        <Info>
            <div className='image'></div>
            <div className='info'>
                <Policy>
                    <h1>Dealerz.</h1>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                </Policy>
                <p>@2020 TanahAir Studio. All rights reserved.</p>
            </div>
        </Info>
        <Links>
        {
            Object.keys(links).map(item => <div key={item}><a href={links[item]}>{item}</a></div>)
        }
        </Links>
    </Container>
  )
}

export default Footer