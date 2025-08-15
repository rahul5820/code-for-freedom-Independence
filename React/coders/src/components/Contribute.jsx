import React from "react";

const Contribute = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-white to-green-600 flex items-center justify-center px-6">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Contribute to Project Tiranga
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your contributions help us spread the spirit of patriotism and unity.  
          Support us by contributing to our project on GitHub.
        </p>
        <a
          href="https://github.com/ANDROIDHASSAN/code-for-freedom"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          💖 Contribute Now
        </a>
      </div>
    </div>
  );
};

export default Contribute;
