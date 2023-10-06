import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/Header.jsx";
import Slider from "./components/slider/Slider.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
        <Header/>
        <Slider/>
        <Footer/>

    </>
  )
}

export default App
