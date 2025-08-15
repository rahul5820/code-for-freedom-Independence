import React from 'react';

const Middle = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center py-6 text-gray-800">About Independence Day </h1>
                <div className="flex flex-col space-y-4">
                    <div className="p-6 bg-[#FF9933]"> 
                        <h2 className="text-2xl font-semibold text-white mb-3">Freedom's Legacy</h2>
                        <p className="text-black">On August 15, 1947, India gained independence after years of struggle and sacrifice. Our freedom fighters fought bravely to secure our nation's sovereignty.</p>
                    </div>
                    <div className="p-6 bg-white border"> 
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Unity in Diversity</h2>
                        <p className="text-gray-700">Independence Day reminds us of our commitment to democracy, unity, and the values our constitution upholds. It represents the dreams of millions of Indians.</p>
                    </div>
                    <div className="p-6 bg-[#138808]"> 
                        <h2 className="text-2xl font-semibold text-white mb-3">Progress & Growth</h2>
                        <p className="text-black">Today, we celebrate not just our past struggles but also our achievements as a nation, looking forward to a future of progress and prosperity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;