import { useNavigate } from 'react-router-dom';
import HomePageImage from '../../../assets/homepage-logo.jpg'

export default function Welcome() {
    //todo: Navigate -
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/patients');
        scrollToTop();
    }

    return (
        <section className="bg-[#101923] py-16">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left Side - Text Content */}
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Welcome to <span className="text-blue-400">Jarurat Care</span>
                    </h1>
                    <p className="text-gray-100 max-w-xl mx-auto md:mx-0">
                        Your trusted digital solution for managing and accessing patient health records securely and efficiently.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer font-semibold" onClick={handleGetStarted}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={HomePageImage}
                        alt="Jarurat Care Illustration"
                        className="w-[90%] md:w-[70%] lg:w-[60%] h-auto max-w-lg object-cover rounded-2xl shadow-2xl mt-6"
                    />
                </div>
            </div>
        </section>
    );
}