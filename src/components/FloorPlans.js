import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ParallaxText from "./ParallaxText";
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/eleven.jpeg';
import five from '../assets/seven.jpg';
import six from '../assets/ten.jpg';
// import seven from '../assets/nine.jpg';



import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';

const FloorPlans = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredPlans, setFilteredPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const containerRef = useRef(null);
    const [lockedPlans, setLockedPlans] = useState(new Set());

    const categories = [
        { id: 'all', label: 'All Plans' },
        { id: '2bhk', label: '2 BHK' },
        { id: '3bhk', label: '3 BHK' },
    ];

    const plans = [
        {
            id: 1,
            type: "3 BHK",
            facing: "East Facing",
            area: "1772 sq. ft.",
            price: "₹85L onwards",
            category: ["3bhk", "east"],
            image: one,
            highlights: ["Spacious Balcony", "Premium Fixtures", "Modern Kitchen"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 2,
                supBuiltUpArea: "1772 sq. ft.",
                carpetArea: "1350 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 2,
            type: "3 BHK",
            facing: "East Facing",
            area: "1470 sq. ft.",
            price: "₹75L onwards",
            category: ["3bhk", "east"],
            image: two,
            highlights: ["Ventilated Rooms", "Garden View", "Walk-in Closet"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 1,
                supBuiltUpArea: "1470 sq. ft.",
                carpetArea: "1150 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 3,
            type: "3 BHK",
            facing: "West Facing",
            area: "1719 sq. ft.",
            price: "₹80L onwards",
            category: ["3bhk", "west"],
            image: three,
            highlights: ["Corner Unit", "Double Balcony", "Luxury Fittings"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 2,
                supBuiltUpArea: "1719 sq. ft.",
                carpetArea: "1300 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 4,
            type: "3 BHK",
            facing: "East Facing",
            area: "1490 sq. ft.",
            price: "₹76L onwards",
            category: ["3bhk", "east"],
            image: four,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 3,
                bathrooms: 3,
                balconies: 1,
                supBuiltUpArea: "1490 sq. ft.",
                carpetArea: "1170 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 5,
            type: "2 BHK",
            facing: "East Facing",
            area: "1470 sq. ft.",
            price: "₹70L onwards",
            category: ["2bhk", "east"],
            image: five,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                supBuiltUpArea: "1470 sq. ft.",
                carpetArea: "1150 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        },
        {
            id: 6,
            type: "2 BHK",
            facing: "East Facing",
            area: "1490 sq. ft.",
            price: "₹72L onwards",
            category: ["2bhk", "east"],
            image: six,
            highlights: ["Optimal Layout", "Modern Design", "Quality Materials"],
            details: {
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                supBuiltUpArea: "1490 sq. ft.",
                carpetArea: "1170 sq. ft.",
                floorRise: "₹50 per sq. ft."
            }
        }
    ];

    useEffect(() => {
        setFilteredPlans(
            selectedCategory === 'all'
                ? plans
                : plans.filter(plan => plan.category.includes(selectedCategory))
        );
    }, [selectedCategory]);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const toggleLock = (planId) => {
        const newLockedPlans = new Set(lockedPlans);
        if (newLockedPlans.has(planId)) {
            newLockedPlans.delete(planId);
        } else {
            newLockedPlans.add(planId);
            // Scroll to contact form when locking a plan
            setTimeout(scrollToContact, 500);
        }
        setLockedPlans(newLockedPlans);
    };

    // Add floating animation
    const floatingAnimation = {
        y: [-10, 10],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <section className="relative min-h-screen py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
            {/* Enhanced animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-rose-500/20" />
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-6xl font-bold"
                        animate={{
                            backgroundImage: [
                                'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
                                'linear-gradient(to right, #34d399, #60a5fa, #a78bfa)',
                                'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)'
                            ]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundSize: '200% auto'
                        }}
                    >
                        Floor Plans
                    </motion.h2>

                    {/* Category Filter with new design */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-12"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm
                                    ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'}`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Enhanced Floor Plans Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredPlans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative group cursor-pointer"
                                style={{ perspective: '1000px' }}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                    className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                                             border border-white/20 shadow-xl transform-gpu transition-all duration-500 hover:border-purple-500/30"
                                >
                                    {/* Image and content container */}
                                    <div className="aspect-w-16 aspect-h-12 relative">
                                        <img
                                            src={plan.image}
                                            alt={plan.type}
                                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Updated lock button design */}
                                        <motion.button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleLock(plan.id);
                                            }}
                                            className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md 
                                                     transition-all duration-300 ${lockedPlans.has(plan.id)
                                                    ? 'bg-yellow-400/30'
                                                    : 'bg-white/20'}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {lockedPlans.has(plan.id) ? (
                                                <LockClosedIcon className="w-6 h-6 text-yellow-400" />
                                            ) : (
                                                <LockOpenIcon className="w-6 h-6 text-white" />
                                            )}
                                        </motion.button>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                    </div>

                                    {/* Updated content styling */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <motion.h3
                                                    className="text-2xl font-bold text-white"
                                                    layout
                                                >
                                                    {plan.type}
                                                </motion.h3>
                                                <span className="text-blue-400 font-semibold">{plan.area}</span>
                                            </div>
                                            <p className="text-gray-300">{plan.facing}</p>

                                            {/* Price tag with glass effect */}
                                            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                                                <span className="text-green-400 font-semibold">{plan.price}</span>
                                            </div>

                                            {/* Features pills */}
                                            <motion.div
                                                className="pt-4 flex flex-wrap gap-2"
                                                variants={{
                                                    hover: {
                                                        y: 0,
                                                        opacity: 1,
                                                        transition: { staggerChildren: 0.1 }
                                                    }
                                                }}
                                            >
                                                {plan.highlights.map((highlight, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full 
                                                                 text-blue-300 text-sm border border-blue-500/30"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {highlight}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Enhanced Modal */}
                <AnimatePresence>
                    {selectedPlan && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            style={{
                                backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, rgba(0,0,0,0.95) 100%)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onClick={() => setSelectedPlan(null)}
                        >
                            {/* Updated modal content */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="relative max-w-4xl w-full bg-gray-900/80 backdrop-blur-xl rounded-2xl 
                                         overflow-hidden border border-white/10"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Image Section */}
                                    <div className="relative aspect-w-16 aspect-h-12">
                                        <img
                                            src={selectedPlan.image}
                                            alt={selectedPlan.type}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                {selectedPlan.type}
                                            </h3>
                                            <p className="text-blue-400 text-xl">{selectedPlan.price}</p>
                                        </div>

                                        {/* Specifications */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-300">Specifications</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-gray-400">
                                                    <p>Bedrooms: {selectedPlan.details.bedrooms}</p>
                                                    <p>Bathrooms: {selectedPlan.details.bathrooms}</p>
                                                    <p>Balconies: {selectedPlan.details.balconies}</p>
                                                </div>
                                                <div className="text-gray-400">
                                                    <p>Super Built-up Area: {selectedPlan.details.supBuiltUpArea}</p>
                                                    <p>Carpet Area: {selectedPlan.details.carpetArea}</p>
                                                    <p>Floor Rise: {selectedPlan.details.floorRise}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-300">Highlights</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPlan.highlights.map((highlight, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={() => setSelectedPlan(null)}
                                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FloorPlans;