import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PatientDetails() {
    const { id } = useParams(); // extract id from URL
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch("/data/patientsData.json");
                const data = await response.json();
                const found = data.find((p) => p.id === parseInt(id));
                setPatient(found);
            } catch (err) {
                console.error("Error fetching patient:", err);
            }
        };
        fetchPatient();
    }, [id]);

    // Show patient not found if data is null
    if (!patient) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold text-red-600">
                    Patient not found
                </h2>
                <Link
                    to="/patients"
                    className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Back to Patients
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 py-12 px-6">
            <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center">
                    Patient's Detail
                </h1>

                <div className="space-y-4 text-gray-700">
                    <p><strong>ID:</strong> {patient.id}</p>
                    <p><strong>Name:</strong> {patient.name}</p>
                    <p><strong>Age:</strong> {patient.age}</p>
                    <p><strong>Gender:</strong> {patient.gender}</p>
                    <p><strong>Contact:</strong> {patient.contact}</p>
                    <p><strong>Address:</strong> {patient.address}</p>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        to="/patients"
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        ← Back to Records
                    </Link>
                </div>
            </div>
        </div>
    );
}