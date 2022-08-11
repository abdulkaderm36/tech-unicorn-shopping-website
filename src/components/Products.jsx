import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import caretRight from '../assets/caret-right.svg'
import close from '../assets/close.svg'
import filter from '../assets/filter.svg'
import search from '../assets/search.svg'

import device from '../screen-sizes/devices'
import ProductCard from './ProductCard'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    & .icon img{
        height: 24px;
        width: 24px;
    }

    @media ${device.tablet}{
        .icon {
            display: none;
        }
    }

`

const SearchBar = styled.div`
    order: 2;
    flex: 1;
    display: flex;
    padding: 1.2rem 2rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--secondary);

    & input{
        border: none;
        height: 100%;
        width: 100%;
        background-color: transparent;
    }

    & input:focus{
        outline: none;
    }
`

const Modal = styled.div`  
    position: absolute;
    top: 4.5rem;
    left: 0; 
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--white);

    @media ${device.tablet}{
        display: none;
    }
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4.5rem;

    label{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .custom-range{
        margin-bottom: 1rem;
        background-color: transparent;
    }

    .custom-range::-moz-range-thumb {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 5em;
        background: var(--primary);
        border: none;
    }
      
    .custom-range::-moz-range-track {
        height: 0.1em;
        border: none;
        border-radius: 0;
        background: #E0E0E0;
        box-shadow: none;
    }


    p{
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 0.005em;
        line-height: 125%;
    }
`

const Categories = styled.div`
    h2{
        font-size: 1.5rem;
    }
`

const CategoryList = styled.ul`
    list-style: none;
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;

        font-weight: 700;
        text-transform: capitalize;

        cursor: pointer;
    }
`

const ProductsList = styled.div`

`

const Products = () => {
    const LIMIT = 8
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {

    // This will fetch all the products from the api
    const fetchProducts = async () => {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        
        setProducts(data)
    }

    // This will fetch all the products from the api
    const fetchCategories = async () => {
        const {data} = await axios.get('https://fakestoreapi.com/products/categories')
        
        setCategories(data)
    }

    if(products.length <= 0){
        fetchProducts()
    }

    if(categories.length <= 0){
        fetchCategories()
    }
    
  })
  
  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSearch = () => {

  }
  
  return (
    <Container>
        <Filter>
            <button className="icon" onClick={handleModal}>
                {
                    isModalOpen ? 
                    <img src={close} alt="close-icon" />:
                    <img src={filter} alt="filter-icon" />
                }
            </button>
            <SearchBar>
                <input type='text' placeholder='Search products'/>
                <img src={search} alt="search-icon" />
            </SearchBar>
        </Filter>

        <ProductsList>
                <ProductCard product={products[0]}/>
        </ProductsList>


        {/* Modal for the filters. Only available on screens smaller than a tablet. */}
        {isModalOpen && 
            <Modal>
                <InputGroup>
                    <label htmlFor="price">
                        Price
                        <img src={filter} alt="filter-icon" />
                    </label>
                    <input className='custom-range' type="range" />
                    <p>
                        <span>Range</span>
                        <span>$5-$20</span>
                    </p>
                </InputGroup>

                <Categories>
                    <h2>Product Categories</h2>
                    <CategoryList>
                        {
                        categories?.map(
                            (category, index) =>    <li key={index} onClick={()=> handleSearch(category)}>
                            {category}
                            <img src={caretRight} alt="caret-right-icon" />
                            </li>
                        )
                        }
                    </CategoryList>
                </Categories>
            </Modal>
        }

    </Container>
  )
}

export default Products