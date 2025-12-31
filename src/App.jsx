import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import PatientsRecords from './pages/PatientsRecords/PatientsRecords'
import PatientDetails from './pages/PatientDetails/PatientDetails'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/ScrollToTop'


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
                    <Route path='/patients' element={<PatientsRecords />} />
                    <Route path="/patients/:id" element={<PatientDetails />} />
                </Routes>

                <Footer />
                
                <ScrollToTop />
            </BrowserRouter>
        </>
    )
}

export default App