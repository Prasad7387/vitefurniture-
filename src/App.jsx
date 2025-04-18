import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Morden from './components/Morden';
import Produtcs from './components/Produtcs';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Morden/>
      <Produtcs/>
      <Footer/>
    </>
  )
}

export default App
