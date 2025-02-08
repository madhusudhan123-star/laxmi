import React from 'react';
import { motion } from 'framer-motion';
import swimmingPool from '../assets/four.jpg';
import totLots from '../assets/one_three.jpeg';
import multiPurposeHall from '../assets/one_two.jpeg';
import gymnasium from '../assets/sueight.jpg';
import indoorGames from '../assets/susix.jpg';

const Amenities = () => {
    return (
        <section id="amenities" className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-100 to-purple-100 text-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Amenities Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                        Amenities
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-700 text-lg">A World of Amenities, Just for You</p>
                </motion.div>

                {/* Amenities List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Swimming Pool */}
                    <AmenityCard
                        title="Swimming Pool"
                        description="A crystal-clear oasis for relaxation and fun."
                        image={swimmingPool}
                    />

                    {/* Tot Lots */}
                    <AmenityCard
                        title="Tot Lots"
                        description="Safe, engaging spaces for your little ones to play and explore."
                        image={totLots}
                    />

                    {/* Multi-Purpose Halls */}
                    <AmenityCard
                        title="Multi-Purpose Halls"
                        description="Perfect for gatherings, celebrations, and events."
                        image={multiPurposeHall}
                    />

                    {/* Gymnasium */}
                    <AmenityCard
                        title="Gymnasium"
                        description="Stay fit with our fully-equipped fitness center."
                        image={gymnasium}
                    />

                    {/* Indoor Games & Billiards Table */}
                    <AmenityCard
                        title="Indoor Games & Billiards Table"
                        description="Let the fun never end with entertainment for all ages."
                        image={indoorGames}
                    />
                </div>

                {/* Built to Last Section */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-md shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Built to Last, Designed for You</h2>
                    <p className="text-gray-600 font-merriweather">
                        Laxmi Nilayam apartments are built with the highest quality standards, blending durability with elegance
                    </p>
                    <ul className="list-none mt-4 space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Framed Structure:</span> R.C.C. construction designed to withstand
                                seismic loads for added peace of mind.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Walls:</span> External walls are 9” thick, offering solid insulation and
                                privacy.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Doors and Windows:</span> Main doors crafted from teak wood, internal
                                doors smooth-finished, with PVC/UPVC windows and designer hardware.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Paint:</span> High-quality exterior and interior finishes to maintain a fresh
                                look over the years.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Flooring:</span> Elegant vitrified tiles in living, dining, and bedrooms;
                                acid-resistant, anti-skid tiles in the bathrooms.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Kitchen:</span> Stylish granite countertops and stainless-steel sink, with
                                provisions for a water purifier.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <p className="text-gray-600">
                                <span className="font-semibold font-merriweather">Utilities:</span> Dedicated areas for your washing machine and a wet area
                                for the kitchen.
                            </p>
                        </li>
                    </ul>
                </motion.div>

                {/* Discover the Joy Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700">Come, Discover the Joy of Living at Laxmi Nilayam</h2>
                    <p className="mt-4 text-gray-600 text-lg font-merriweather">
                        Laxmi Nilayam is more than just a place to live—it’s a place to thrive. Your dream home
                        awaits in the heart of Guntur. Make the move today and embrace a lifestyle that offers
                        nothing short of excellence.
                    </p>
                </motion.div>

                {/* Ask Us Anything Section */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-md shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Ask us anything – we’re just a message away</h2>
                    <p className="text-gray-600 font-merriweather">
                        Simply type your questions in the box below, and our team will get back to you with all the
                        information you need. Let’s make your dream home a reality!
                    </p>
                    <input
                        type="text"
                        placeholder="Type your question here..."
                        className="mt-4 w-full p-4 rounded-lg bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    />
                    <button className="mt-4 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:bg-gradient-to-l transition-colors duration-300">
                        Send Message
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const AmenityCard = ({ title, description, image }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-200 font-merriweather">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Amenities;