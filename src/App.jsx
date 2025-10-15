import React from 'react'
import Navbar from './components/NavigationBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                
            </BrowserRouter>
        </>
    )
}

export default App