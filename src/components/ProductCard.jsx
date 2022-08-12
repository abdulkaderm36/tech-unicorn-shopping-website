import React from 'react'
import styled from 'styled-components'

import device from '../screen-sizes/devices'

import startFill from '../assets/star-fill.svg'
import startOutline from '../assets/star-outline.svg'


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: var(--white);

    padding: 1.4rem;

    height: 375px;
    width: 100%;

    border-radius: 6px;

    @media ${device.tablet}{
        width: 100%;
    }

    @media ${device.laptop}{
        width: 256px;
    }

    @media ${device.laptopL}{
        width: 424px;
    }

`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    img{
        height: 200px;
        width: 100%;
        object-fit: contain;
    }
`

const Bookmark = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-light);
    border-radius: 6px;

    padding: 0.4rem;

    img{
        width: 24px;
        height: 24px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align:center;

    gap: 0.5rem;

    .title{
        font-size: 0.8rem;
        overflow: hidden;
        display: -webkit-box;        text-overflow: ellipsis;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .rating img{
        height: 16px;
        width: 16px;
    }

    .category{
        color: #9A9AB0;
        font-size: 0.9rem;
    }

    .price{
        color: var(--primary);
        font-weight: 500;
    }

`

const ProductCard = ({product}) => {

    const ratingStars = []

    // loop to add the filled and outlined stars
    for(let i=0; i<5; i++){
        if(Math.round(product.rating.rate)-1  > i){
            ratingStars.push(startFill)
        }else{
            ratingStars.push(startOutline)
        }
    }

  return (
    <Container>
        <ImageContainer>
            <img src={product.image} alt="product" />
        </ImageContainer>
        
        <InfoContainer>
            <h5 className="title" >{product.title}</h5>
            <p className="rating" >
                {/* add the correct star */}
                {
                    ratingStars?.map((star, index) => <img key={index} src={star} alt="star"/>)
                }
            </p>
            <p className="category" >{product.category}</p>
            <p className="price" >${product.price}</p>
        </InfoContainer>

        <Bookmark>
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.0001 28.7609L4.6868 17.4476C3.18638 15.9473 2.34339 13.9125 2.34326 11.7907C2.34314 9.66893 3.18589 7.634 4.68613 6.13358C6.18638 4.63316 8.22121 3.79016 10.343 3.79004C12.4648 3.78991 14.4997 4.63267 16.0001 6.13291C17.5013 4.63437 19.5357 3.79271 21.6568 3.79271C23.7779 3.79271 25.8123 4.63437 27.3135 6.13291V6.13291C28.8114 7.6344 29.6526 9.66869 29.6526 11.7896C29.6526 13.9105 28.8114 15.9448 27.3135 17.4462L16.0001 28.7609ZM10.3428 6.45691C9.28786 6.45687 8.2566 6.76969 7.37946 7.35581C6.50232 7.94192 5.81871 8.775 5.41508 9.74968C5.01145 10.7243 4.90594 11.7968 5.1119 12.8315C5.31786 13.8661 5.82603 14.8164 6.57213 15.5622L16.0001 24.9902L25.4281 15.5622C25.9697 15.0328 26.3922 14.3941 26.6677 13.6886C26.9431 12.9831 27.0652 12.2271 27.0257 11.4708C26.9862 10.7145 26.7861 9.97524 26.4387 9.30228C26.0913 8.62932 25.6046 8.03807 25.0109 7.56786C24.4172 7.09766 23.7301 6.75929 22.9955 6.57527C22.2609 6.39126 21.4954 6.36581 20.7502 6.50063C20.005 6.63544 19.297 6.92743 18.6734 7.35716C18.0497 7.7869 17.5248 8.34451 17.1335 8.99291L16.0001 10.8222L14.8668 8.99291C14.399 8.21296 13.7353 7.56885 12.9418 7.12447C12.1482 6.6801 11.2523 6.45089 10.3428 6.45958V6.45691Z"
                        fill="var(--primary)" />
                </svg>
            </Bookmark>
    </Container>
  )
}

export default ProductCard