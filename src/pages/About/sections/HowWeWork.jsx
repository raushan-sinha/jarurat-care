import HowWeWorkImage from "../../../assets/About/HowWeWork.png";

export default function HowWeWork() {
    return (
        <section className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-10 items-center p-5 lg:py-15 text-center">
            <div className="w-full xl:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold text-cyan-800 mb-6">
                    How We Work
                </h1>

                <p className="text-md md:text-xl">
                    Our system uses modern web technologies like React, Node.js, and
                    secure database solutions to maintain a high level of reliability.
                    Each patient’s record is assigned a unique digital identity, allowing
                    healthcare professionals to update, view, or share details in real
                    time. From prescriptions and lab results to appointment history, all
                    data remains organized and traceable.
                </p>
            </div>

            <img src={HowWeWorkImage} alt="Jarurat Care About" className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg object-cover" />
        </section>
    );
}