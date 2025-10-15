import React from 'react';

export default function HowItWorks() {
    const steps = [
        { step: "1", title: "Register", desc: "Sign up as a hospital, doctor, or patient." },
        { step: "2", title: "Add Records", desc: "Store and update medical information securely." },
        { step: "3", title: "Access Anywhere", desc: "Access reports from any device instantly." },
        { step: "4", title: "Share Easily", desc: "Share records with authorized doctors safely." },
    ];

    return (
        <section className="py-16 bg-blue-50">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                {steps.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}