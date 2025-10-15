import React from 'react';

export default function Welcome() {
    const imageUrl = 'https://media.gettyimages.com/id/187137135/photo/doctors-using-digital-tablet-together-in-hospital.jpg?s=612x612&w=0&k=20&c=5e81mhbaAbmx8GM1fiFGcrskiDR5Cv6p7xwjjE5z6Mk='

    return (
        <section className="bg-[#101923] py-16 mt-10">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Left Side - Text Content */}
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Welcome to <span className="text-blue-400">Jarurat Care</span>
                    </h1>
                    <p className="text-gray-100 max-w-xl mx-auto md:mx-0">
                        Your trusted digital solution for managing and accessing patient health records securely and efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-4">
                        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer font-semibold">
                            Get Started
                        </button>
                        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer font-semibold">
                            Add New Record
                        </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={imageUrl}
                        alt="Jarurat Care Illustration"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}