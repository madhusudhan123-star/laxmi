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
                        className="p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-md shadow-lg"
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

                        <h3 className="text-3xl font-bold text-blue-700 mt-6 mb-4">Contact Us:</h3>
                        <p className="text-gray-600 font-merriweather">
                            Phone: +91 70751 55555<br />
                            Email: parkville.gnt@gmail.com<br />
                            Website: www.parkville.co.in
                        </p>

                        <p className="mt-6 text-gray-600 font-merriweather">
                            Laxmi Nilayam – Where dreams come to life, and every day feels like a celebration.
                        </p>
                    </motion.div>

                    {/* Google Maps */}
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.191649445474!2d80.44997437448848!3d16.31240438426238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a73a98e05a40d%3A0x3c56a39504c9922c!2sLogos%20Public%20School!5e0!3m2!1sen!2sin!4v1718348921424!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Laxmi Nilayam Location"
                        ></iframe>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    className="mt-16 p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-md shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Send us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;