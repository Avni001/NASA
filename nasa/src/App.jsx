import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import News from './Components/News'
import Airspace from './Components/Airspace'
import Solarsystem from './Components/Solarsystem'
import Explore from './Components/Explore'
import More from './Components/More'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div >
      <Navbar/>      
      <Home/>
      <br /> <br />
      <News/>

      <br />    <br />
      <Airspace/>     <br />  <br />
      <Solarsystem/>  <br />   <br />
      <Explore/>    <br />   <br />
      <More/>     <br />  <br />
      <Footer/>

      

    </div>
  )
}
