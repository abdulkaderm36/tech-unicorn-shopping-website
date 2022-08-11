import React from 'react'
import styled from 'styled-components'

import phone from '../assets/phone.svg'
import truck from '../assets/truck.svg'
import menu from '../assets/hamburger-menu.svg'
import search from '../assets/search.svg'
import heart from '../assets/heart.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import bell from '../assets/bell.svg'

import device from '../screen-sizes/devices'

const TopBar = styled.div`
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

    & li{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media ${device.tablet}{
        display: flex;
    }
`

const BottomBar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.8rem 1rem;
    gap: 1rem;

    @media ${device.tablet}{
        flex-direction: row;
        align-items: center;
    }

    @media ${device.laptop}{
        padding: 1.8rem 5.8rem;
    }

`

const SearchBar = styled.div`
    order: 2;
    flex: 1;
    display: flex;
    padding: 1.2rem 2rem;
    background-color: var(--white);
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    & input{
        border: none;
        height: 100%;
        width: 100%;
    }

    & input:focus{
        outline: none;
    }

    @media ${device.laptopL}{
        margin: 0 4rem 0 5.8rem;
    }
`

const NavMenuLeft = styled.ul`
    order: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items:center;
    gap:2rem;
    font-size: 1rem;

    & li a{
        text-decoration: none;
        font-weight: 500;
        color: var(--secondary);
    }

`
const NavMenuRight = styled.ul`
    order: 3;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 2.5rem;
    padding-top: 0.5rem;

    & .cart-icon{
        position: relative;
    }

    & .cart-icon::after{
        position: absolute;
        top: -15px;
        right: -18px;
        content: '3';
        display:flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background-color: var(--primary);
        color: var(--white);
    }

    & li a{
        text-decoration: none;
        font-weight: 500;
        color: var(--secondary);
    }

    @media ${device.tablet}{
        padding-top: 0;
    }
`

const NavBar = () => {
  return (
    <>
    <TopBar>
        <Logo>
            Dealerz.
        </Logo>
        <Menu>
            <li>
                <img src={phone} alt="phone-icon" />
                Call Center
            </li>
            <li>
                <img src={truck} alt="truck-icon" />
                Shipping & Returns
            </li>
        </Menu>
    </TopBar>

    <BottomBar>
        <NavMenuLeft>
            <li>
                <a href="#">Shop</a>
            </li>
            <li>
                <a href="#">Promo</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
        </NavMenuLeft>
        <SearchBar>
            <input type='text' placeholder='Search what you need'/>
            <img src={search} alt="search-icon" />
        </SearchBar>
        <NavMenuRight>
            <li>
                <a href="#">
                    <img src={heart} alt="heart-icon" />
                </a>
            </li>
            <li class="cart-icon">
                <a href="#">
                    <img src={cart} alt="cart-icon" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={user} alt="user-icon" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={bell} alt="bell-icon" />
                </a>
            </li>
        </NavMenuRight>
    </BottomBar>
    </>
  )
}

export default NavBar