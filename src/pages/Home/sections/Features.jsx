import React from 'react';

export default function Features() {
    const features = [
        { title: "Secure Records", desc: "All patient data is encrypted and safely stored." },
        { title: "Quick Registration", desc: "Add or update patient profiles in seconds." },
        { title: "Smart Dashboard", desc: "View all patients, doctors, and analytics in one place." },
        { title: "Appointment Tracker", desc: "Schedule and monitor patient visits effortlessly." },
        { title: "Health Insights", desc: "Analyze patient statistics and medical trends easily." },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-[#f1eaff] to-[#ffeded]">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">Our Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {features.map((item, idx) => (
                    <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="font-bold text-lg text-blue-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}