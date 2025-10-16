import React, { useState } from "react";
import { Close } from "@mui/icons-material";

const PatientsInfoPopup = ({ onClose }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [contact, setContact] = useState('')

    //todo: Form Validation -
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() || age.trim() || contact.trim()) {
            setName('')
            setAge('')
            setContact('')
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50 px-4">
            {/* Popup Box */}
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
                {/* Close Icon */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                >
                    <Close size={24} />
                </button>

                {/* Header */}
                <h2 className="text-2xl font-semibold text-center text-sky-500 mb-6 mt-4">
                    Add New Patient Info
                </h2>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="patientName">
                            Patient Name
                        </label>
                        <input
                            type="text"
                            id="patientName"
                            autoComplete="off"
                            placeholder="Enter patient's name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="patientAge">
                            Patient Age
                        </label>
                        <input
                            type="number"
                            id="patientAge"
                            autoComplete="off"
                            placeholder="Enter patient's age"
                            required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="patientContact">
                            Patient Contact
                        </label>
                        <input
                            type="text"
                            id="patientContact"
                            autoComplete="off"
                            placeholder="Enter contact number"
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PatientsInfoPopup;