import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'

import device from '../screen-sizes/devices'


import phone from '../assets/phone.svg'
import truck from '../assets/truck.svg'

const Container = styled.div`
    height: 93px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    @media ${device.laptop}{
        padding: 0 5.8rem;
    }
`

const Logo = styled.h1`
    font-weight: 700;
    font-size: 39px;
    line-height: 120%;
    letter-spacing: 0.005em;
    color: var(--primary);
    flex: 1;
    text-align: center;

    @media ${device.tablet}{
        text-align: left;
    }
`

const Menu = styled.ul`
    list-style: none;
    display: none;
    gap:2.2rem;
    font-weight: 500;
    color: var(--secondary);

    & li a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        color: var(--secondary);
        text-decoration: none;
    }

    @media ${device.tablet}{
        display: flex;
    }
`

const Header = () => {
  return (
    <>
    <Container>
        <Logo>
            Dealerz.
        </Logo>
        <Menu>
            <li>
                <a href="#">
                <img src={phone} alt="phone-icon" />
                Call Center
                </a>
            </li>
            <li>
                <a href="#">
                <img src={truck} alt="truck-icon" />
                Shipping & Returns
                </a>
            </li>
        </Menu>
    </Container>
    <NavBar/>
    </>
  )
}

export default Header