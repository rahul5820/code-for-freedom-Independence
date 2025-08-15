import React from "react";

const totalReels = 13;

const Reels = () => {
  const reels = Array.from({ length: totalReels }, (_, i) => `${i + 1}.mp4`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-white to-green-600">
      <div className="container mx-auto px-4 pt-10 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-navy-900">
           Best Independence Day Reels
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {reels.map((fileName, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
            
              <div className="aspect-[9/16] border-3 border-black">
                <video
                  className="w-full h-full object-cover"
                  src={`/${fileName}`}
                  controls
                  playsInline
                ></video>
              </div>
              <div className="p-3 text-center font-semibold border-3 border-black">
                Reel {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reels;
