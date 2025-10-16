import React from 'react'
import Welcome from './sections/Welcome';
import Features from './sections/Features';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import HowItWorks from './sections/HowItWorks';

export default function Home() {
    return (
        <>
            <div>
                <Welcome />
                <Features />
                <HowItWorks />
                <Statistics />
                <Testimonials />
            </div>
        </>
    );
}