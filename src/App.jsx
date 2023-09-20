import React from 'react'
import "./App.css"
import { SlHome } from "react-icons/sl"
import { FcAbout } from "react-icons/fc"
import { GoFileMedia } from "react-icons/go"
import { Route, Routes } from 'react-router-dom'
import About from './routes/About'
import Photos from './routes/Photos'
import Videos from './routes/Videos'
import Home from './routes/Home'
import { styles } from './styles/style'
import Donation from './routes/Donation'
import Location from './routes/Location'
import Aarti from './routes/Aarti'
import Headers from './components/Headers'
import sitaRamaImageUrl from "../src/assets/ram-sita.jpg"
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={styles.headersContainer}>
        <Headers imageUrl={sitaRamaImageUrl} />
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/videos' element={<Videos />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/location" element={<Location />} />
        <Route path='/aarti' element={<Aarti />} />
      </Routes>
    </div>
  )
}

export default App