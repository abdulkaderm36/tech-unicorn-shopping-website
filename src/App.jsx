import { useState } from 'react'

//styles
import './App.css'

//Screens
import ShopScreen from './screens/ShopScreen'

//Components
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <ShopScreen/>
    </div>
  )
}

export default App
