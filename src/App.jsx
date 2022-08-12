import { useState } from 'react'

//styles
import './App.css'

//Screens
import ShopScreen from './screens/ShopScreen'

//Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <ShopScreen/>
      <Footer/>
    </div>
  )
}

export default App
