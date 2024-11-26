import React from "react";

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Boxed Games.</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Welkom!
                </p>
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 mt-2">
                            Informatie 1
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="text-gray-600 mt-2">
                            Informatie 2
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-8">Ons Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">Persoon</h3>
                            <p className="text-gray-600 mt-2">CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;