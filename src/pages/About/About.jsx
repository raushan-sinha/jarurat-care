import AboutHeader from './sections/AboutHeader';
import Mission from './sections/Mission';
import WhyChoose from './sections/WhyChoose';
import HowWeWork from './sections/HowWeWork';
import Vision from './sections/Vision';
import Security from './sections/Security';
import FutureGoals from './sections/FutureGoals';

export default function About() {
    return (
        <>
            <div className='mt-15 bg-cyan-50'>
                <AboutHeader />
                <Mission />
                <WhyChoose />
                <HowWeWork />
                <Vision />
                <Security />
                <FutureGoals />
            </div>
        </>
    );
}