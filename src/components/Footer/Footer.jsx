import React from 'react'
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    //todo: Quick links -
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Patients', path: '/patients' },
        { name: 'About', path: '/about' },
    ];

    //todo: Contact Info -
    const contactInfo = [
        { type: 'Email:', value: 'mailto:support@jaruratcare.com', name: 'support@jaruratcare.com' },
        { type: 'Phone:', value: 'tel:+919876543210', name: '+91 98765 43210' },
        { type: 'Address:', value: '#', name: 'Delhi, India' },
    ];

    //todo: Social Media Links -
    const socialLinks = {
        heading: 'Follow Us',
        icons: [
            { component: <FacebookIcon />, url: '#' },
            { component: <InstagramIcon />, url: '#' },
            { component: <WhatsAppIcon />, url: '#' },
            { component: <XIcon />, url: '#' },
        ]
    };

    return (
        <>
            <footer className="bg-[#101923] text-gray-200 py-10 mt-10 text-center">
                <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center space-y-10">

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full text-center sm:text-left">

                        {/* Quick Links */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {quickLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link to={link.path} className="hover:text-blue-400 transition text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
                            <ul className="text-gray-400 text-sm space-y-2">
                                {contactInfo.map((info, idx) => (
                                    <li key={idx}>
                                        {info.type}{" "}
                                        <a href={info.value} className="hover:text-blue-400">
                                            {info.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-xl font-semibold text-white mb-3">{socialLinks.heading}</h3>
                            <div className="flex space-x-4 justify-center sm:justify-start">
                                {socialLinks.icons.map((icon, idx) => (
                                    <a key={idx} href={icon.url} className="hover:text-blue-400 transition">
                                        {icon.component}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 w-full pt-5 text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} Jarurat Care. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}