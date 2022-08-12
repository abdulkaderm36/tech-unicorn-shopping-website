import React from 'react'
import styled from 'styled-components'

import rightArrow from '../assets/right-arrow.svg'

const Container = styled.div`
    margin-top: 10rem;
    padding: 5.5rem;
    background-color: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;

    max-width: 600px;

    h1{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    p{
        color: #9A9AB0;
    }
`

const Input = styled.div`
    background: #F4F7F8;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    max-width: 816px;
    width: 100%;

    input{
        flex:1;
        border: none;
        background: transparent;
        padding: 1.4rem 2rem;
    }

    input:focus{
        outline: none;
    }

    button{
        background: var(--primary);
        border: none;
        border-radius: 8px;
        padding: 0.7rem;
        margin-right: 0.5rem;
        cursor: pointer;
    }
`

const NewsLetter = () => {
  return (
    <Container>
        <Info>
            <h1>Join Our News Letters</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </p>
        </Info>
        <Input>
            <input type="text" name="email" id="email" placeholder='Insert your mail here'/>
            <button>
                <img src={rightArrow} alt="right-arrow-icon" />
            </button>
        </Input>
    </Container>
  )
}

export default NewsLetter