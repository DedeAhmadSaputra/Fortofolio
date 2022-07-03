import React from 'react'
import Navbar from "./components/Navbar"
import Slidbar from './components/Slidbar'
import About from "./components/About";
import Service from "./components/Service";
import Fortofolio from "./components/Fortofolio";
import Contact from "./components/Contact";
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Slidbar />
      <About />
      <Service/>
      <Fortofolio />
      <Contact />
      <Footer />
    
    </div>
  )
}
