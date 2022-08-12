import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 1.5rem;
`

const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
    img{
        height: 80px;
        width: 80px;
        border-radius: 8px;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p{
        font-weight: 500;
        color: var(--primary);
    }
`

const FeaturedCard = ({product}) => {
  return (
    <Container>
        <ImageContainer>
            <img src={product.image} alt="product" />
        </ImageContainer>
        <InfoContainer>
            <h5 className='title'>{product.title}</h5>
            <p className='price'>${product.price}</p>
        </InfoContainer>
    </Container>
  )
}

export default FeaturedCard