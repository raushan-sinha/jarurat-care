import React from 'react'
import Welcome from './sections/Welcome';
import Features from './sections/Features';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';

export default function Home() {
    return (
        <>
            <div>
                <Welcome />
                <Features />
                <Statistics />
                <Testimonials />
            </div>
        </>
    );
}