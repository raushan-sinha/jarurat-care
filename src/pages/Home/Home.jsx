import React from 'react'
import { Features, HowItWorks, Statistics, Testimonials, Welcome } from './sections';

export default function Home() {
    return (
        <>
            <Welcome />
            <Features />
            <HowItWorks />
            <Statistics />
            <Testimonials />
        </>
    );
}