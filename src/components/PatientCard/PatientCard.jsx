import React from "react";

export default function PatientCard({ patient }) {
	return (
		<div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition-all duration-300">
			<h2 className="text-lg font-semibold text-gray-800">
				Patient Name: {patient.name}
			</h2>
			<p className="text-gray-600 mt-1 font-semibold">Age: {patient.age}</p>
			<p className="text-gray-600 mb-4 font-semibold">Contact: {patient.contact}</p>

			<button className="mt-auto bg-[#cc0c39] text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-800 transition cursor-pointer">
				View Details
			</button>
		</div>
	);
}