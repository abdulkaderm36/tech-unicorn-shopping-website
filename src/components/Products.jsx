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
        display: none;
    }

`

const SearchBar = styled.div`
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

    @media ${device.tablet}{
        flex: 0;
        min-width: 15rem;
        width: 18rem;
        margin-bottom: 4rem;
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

    box-shadow: 1px 1px 3px #00000055;
    border-radius: 5px;

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

const ProductsContainer = styled.div`
    display: flex;
    gap: 1rem;

    justify-content: center;

    .filters{
        display: none;
    }
    .products{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .show-more{
        display: flex;
        justify-content: center;
        align-items: center;
    }


    @media ${device.tablet}{
        .filters{
            display: flex;
            flex-direction: column;
        }
    }

`

const ProductsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 4rem;

    @media ${device.tablet}{
        flex-direction: row;
        margin-top: 0;
    }
`

const ShowMoreButton = styled.button`
    font-size: 1rem;
    padding: 1.2rem 1.5rem;
    background-color: var(--primary);
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    color: var(--white);
    border: none;
    border-radius: 8px;
    cursor: pointer;
`

const Products = () => {
    // number of products to show
    const LIMIT = 8
    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState([])
    const [pages, setPages] = useState(0)
    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {

    // This will fetch all the products from the api
    const fetchProducts = async () => {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        
        setProducts(data)
        setShowProducts(data.slice(0, 8))
        setPages(Math.ceil(data.length/LIMIT))
    }

    // This will fetch all the categories from the api
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

  const handleShowMore = () => {
    let currentItems = Math.floor(showProducts.length)
    const updatedShowProducts = [...showProducts, ...products.slice(currentItems,currentItems+LIMIT )]
    setShowProducts(updatedShowProducts)
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

        <ProductsContainer>
            <div className="filters">
                <SearchBar>
                    <input type='text' placeholder='Search products'/>
                    <img src={search} alt="search-icon" />
                </SearchBar>
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
            </div>
            <div className='products'>
                <ProductsList>
                        {/* Display the product details by passing it to the ProductCard Component */}
                        {showProducts?.length > 0 && showProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </ProductsList>
                {showProducts?.length < products?.length && 
                    <div className="show-more">
                    <ShowMoreButton onClick={handleShowMore}>
                        See More
                    </ShowMoreButton>
                    </div>
                }
                
            </div>
        </ProductsContainer>
        

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