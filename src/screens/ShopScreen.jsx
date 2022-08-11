import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products'
import device from '../screen-sizes/devices'

const Container = styled.div`
padding: 1rem;
    
@media ${device.laptop}{
  padding: 5.8rem;
}
`

const ShopScreen = () => {
  return (
    <>
      <HeroSection/>
      <Container>
        <Products/>
      </Container>
    </>
  )
}

export default ShopScreen