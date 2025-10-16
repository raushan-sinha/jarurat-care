import React from "react";

export default function AboutHeader() {
    return (
        <div className="py-16 px-6 sm:px-10 lg:px-20 text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About <span className="text-blue-500">Jarurat Care</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                Jarurat Care is a modern digital platform designed to simplify the way
                patient records are stored, managed, and accessed. We aim to empower
                healthcare institutions, doctors, and patients with a unified system
                that ensures secure, fast, and reliable access to health data anytime,
                anywhere.
            </p>
        </div>
    );
}