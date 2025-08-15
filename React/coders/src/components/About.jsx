import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-white to-green-600 flex items-center justify-center px-6 ">
      <div className="max-w-3xl border-2 border-black bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">
          About Project Tiranga
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Project Tiranga is a heartfelt initiative to celebrate India's 
          Independence Day by showcasing the beauty, culture, and diversity 
          of our great nation. Through videos, stories, and contributions, 
          we aim to unite people under the colors of our beloved flag.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          From inspirational reels to educational content, our goal is to 
          spread patriotism, positivity, and pride. Every video and story 
          shared here represents the love we all have for Bharat Mata.  
        </p>
      </div>
    </div>
  );
};

export default About;
