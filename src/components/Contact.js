import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-100 to-purple-100 text-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000"></div>
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Contact Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-700 text-lg">Your Journey to Laxmi Nilayam Starts Here</p>
                </motion.div>

                {/* Contact Details and Map */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        className="p-8 rounded-2xl bg-white backdrop-blur-md shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-700 mb-4">Location:</h3>
                        <p className="text-gray-600 font-merriweather mb-4">
                            Your Dream home Awaits at<br />
                            Laxmi Nilayam<br />
                            D.No 272 & 273, Logos Public School Lane, Syamalanagar Extension, Guntur – 522006
                        </p>


                    </motion.div>

                    {/* Google Maps */}
                    <motion.div
                        className="rounded-2xl overflow-hidden bg-white p-8 shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-700 mb-4">Call Now:</h3>
                        <p className="text-gray-600 font-merriweather">
                            Phone: +91 70751 55555<br />

                        </p>

                        <p className="mt-6 text-gray-600 font-merriweather">
                            Laxmi Nilayam – Where dreams come to life, and every day feels like a celebration.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Form */}

            </div>
        </section>
    );
};

export default Contact;