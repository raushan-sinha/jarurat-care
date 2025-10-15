import React from 'react'
import Navbar from './components/NavigationBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'


function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Navbar />
                </header>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App