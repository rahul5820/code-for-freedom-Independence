import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-500 via-white to-green-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-navy-900">
                        Celebrating India's Independence
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-800">
                        Proud to be an Indian. Jai Hind!
                    </p>
                    <div className="flex justify-center px-2 sm:px-4">
                        <iframe 
                            className="w-full max-w-3xl rounded-lg shadow-lg aspect-video border-2 sm:border-5 border-white"
                            src="https://www.youtube.com/embed/AHCGkBx1mLA"
                            title="Independence Day Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
