import React from 'react';

export default function Testimonials() {
    const reviews = [
        { name: "Dr. Meera Sharma", text: "Jarurat Care has simplified patient management for our clinic. Highly reliable!" },
        { name: "Rahul Verma", text: "I can easily access my health history anytime. Excellent platform!" },
        { name: "City Hospital", text: "Data security and speed make this our go-to medical record system." },
    ];

    return (
        <section className="py-16 bg-blue-100 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-blue-700 mb-10">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {reviews.map((r, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                        <p className="text-gray-600 italic mb-3">“{r.text}”</p>
                        <h4 className="text-blue-700 font-semibold">{r.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}