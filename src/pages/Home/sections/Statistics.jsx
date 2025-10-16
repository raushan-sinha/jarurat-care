import React from 'react';

export default function Statistics() {
    const stats = [
        { title: "Patients Registered", value: "15K+" },
        { title: "Doctors Onboarded", value: "2.3K+" },
        { title: "Hospitals Linked", value: "120+" },
        { title: "Reports Generated", value: "58K+" },
    ];

    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-blue-700 mb-8">Our Impact in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((item, idx) => (
                    <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md">
                        <h3 className="text-3xl font-bold text-blue-700">{item.value}</h3>
                        <p className="text-gray-600 font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}