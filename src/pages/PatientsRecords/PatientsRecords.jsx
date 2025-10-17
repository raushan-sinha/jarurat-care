import React, { useState, useEffect } from "react";
import PatientCard from "../../components/PatientCard/PatientCard";
import PatientsInfoPopup from "../../components/PatientsInfoPopup/PatientsInfoPopup";
import { CircularProgress, Box } from '@mui/material';

export default function PatientsRecords() {
    const [patientsData, setPatientsData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(true);

    //todo: Fetch JSON data
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('/data/patientsData.json');
                if (!response.ok) throw new Error('Network Response is not ok');
                const data = await response.json();
                setPatientsData(data);
            } catch (err) {
                console.error('Failed to fetch patients:', err);
            } finally {
                setTimeout(() => setLoading(false), 2000)
            }
        }
        fetchPatients();
    }, [])


    //todo: Filter patients based on search
    const filteredPatients = patientsData.filter((patient) => (
        patient.name.toLowerCase().includes(searchData.toLowerCase())
    ))

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 py-12 px-6 mt-10">
            {/* Header */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                <h1 className="text-4xl font-bold text-sky-700 whitespace-nowrap">
                    Patients Records
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search patients by name..."
                        id="username"
                        name="username"
                        autoComplete="username"
                        onChange={(e) => setSearchData(e.target.value)}
                        className="px-4 py-2 w-full sm:w-72 rounded-lg border-2 font-semibold border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <button
                        className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer whitespace-nowrap"
                        onClick={() => setShowPopup(true)}
                    >
                        + Add New Patient
                    </button>

                    {showPopup && (
                        <PatientsInfoPopup
                            onClose={() => setShowPopup(false)}
                        />
                    )}
                </div>
            </div>

            {/* Loading state */}
            {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 10 }}>
                    <CircularProgress />
                    <p className="text-gray-700 text-2xl">Loading Patients Details...</p>
                </Box>
            ) : (
                /* Patient Cards Grid */
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPatients.map((patient) => (
                        <PatientCard key={patient.id} patient={patient} />
                    ))}
                    {filteredPatients.length === 0 && (
                        <p className="col-span-full text-gray-800 text-2xl text-center">
                            No Patients found.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}