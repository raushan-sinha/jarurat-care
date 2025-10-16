import React from "react";

export default function HowWeWork() {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgfVGbvI8oR57TKTtBY_U-v6N8BmEU9LKKg&s';

    return (
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-gray-300 text-justify">
                <h2 className="text-2xl font-semibold text-white mb-4">How We Work</h2>
                <p>
                    Our system uses modern web technologies like React, Node.js, and
                    secure database solutions to maintain a high level of reliability.
                    Each patient’s record is assigned a unique digital identity, allowing
                    healthcare professionals to update, view, or share details in real
                    time. From prescriptions and lab results to appointment history, all
                    data remains organized and traceable.
                </p>
            </div>

            <div className="flex justify-center">
                <img
                    src={imageUrl}
                    alt="Jarurat Care About"
                    className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg object-cover"
                />
            </div>
        </div>
    );
}