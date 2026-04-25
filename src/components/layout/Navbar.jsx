import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
        scrollToTop();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //todo: Logo text -
    const logoName = 'Jarurat Care';

    //todo: Navbar Links -
    const navLinks = [
        { name: 'Home', href: '/', icon: <HomeIcon /> },
        { name: 'Patients', href: '/patients', icon: <PersonalInjuryIcon /> },
        { name: 'About', href: '/about', icon: <InfoIcon /> },
    ]

    return (
        <>
            <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white z-50 shadow-lg rounded-2xl backdrop-blur-xl border border-gray/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div
                        className="text-base sm:text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer logo-text"
                        onClick={handleNavigate}
                    >
                        {logoName}
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex text-white font-medium text-base lg:text-lg items-center gap-4 lg:gap-10">
                        {navLinks.map((item, id) => (
                            <li key={id}>
                                <div className={`${location.pathname === item.href ? 'text-red-500' : ''} hover:text-red-300 hover:drop-shadow-[0_0_15px_#fca5a5] flex flex-row items-center gap-2`}>
                                    {item.icon}
                                    <Link
                                        to={item.href}
                                        className={`hover:underline underline-offset-8 decoration-2 hover:text-red-300 hover:drop-shadow-[0_0_15px_#fca5a5] transition-all`}>
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="focus:outline-none text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <ClearIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#0d1825] text-white shadow-lg transition-all duration-300">
                        <ul className="flex flex-col items-start px-4 space-y-6 py-6 font-medium">
                            {navLinks.map((item, id) => (
                                <li key={id}>
                                    <div className={`${location.pathname === item.href ? 'text-red-500' : ''} hover:text-red-300 hover:drop-shadow-[0_0_15px_#fca5a5] flex flex-row items-start gap-2`}>
                                        {item.icon}
                                        <Link
                                            to={item.href}
                                            className="hover:text-red-300 hover:drop-shadow-[0_0_15px_#fca5a5]transition-colors hover:underline underline-offset-8 decoration-2"
                                            onClick={() => {
                                                setIsOpen(false);
                                                scrollToTop();
                                            }}>
                                            {item.name}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav >
        </>
    );
}