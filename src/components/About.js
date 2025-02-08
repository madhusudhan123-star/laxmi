import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxText from "./ParallaxText";
import five from '../assets/about.jpg';
import bg from '../assets/one.jpg';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';

import { ChartBarIcon, HomeIcon, UserGroupIcon, SparklesIcon, LightBulbIcon, StarIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Banner from './Banner';
import IlluminatedCard from './IlluminatedCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: "linear"
    };

    const highlights = [
        {
            title: "Projects Completed",
            value: "50+",
            icon: <HomeIcon className="w-8 h-8" />,
            color: "bg-blue-500"
        },
        {
            title: "Happy Families",
            value: "200+",
            icon: <UserGroupIcon className="w-8 h-8" />,
            color: "bg-purple-500"
        },
        {
            title: "Years Experience",
            value: "10+",
            icon: <ChartBarIcon className="w-8 h-8" />,
            color: "bg-green-500"
        },
        {
            title: "Awards Won",
            value: "15+",
            icon: <SparklesIcon className="w-8 h-8" />,
            color: "bg-yellow-500"
        }
    ];

    // Add scroll-based animations
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    // Add gallery images
    const galleryImages = [
        {
            src: one,
            title: 'Luxury Apartments',
            description: 'Modern living spaces'
        },
        {
            src: two,
            title: 'Premium Amenities',
            description: 'World-class facilities'
        },
        {
            src: three,
            title: 'Green Spaces',
            description: 'Nature-inspired living'
        }
    ];

    // Add floating animation variant
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const missionAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const values = [
        {
            title: "Innovation",
            icon: <LightBulbIcon className="w-8 h-8" />,
            description: "Pioneering new standards in real estate development",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Excellence",
            icon: <StarIcon className="w-8 h-8" />,
            description: "Committed to delivering outstanding quality",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Integrity",
            icon: <ShieldCheckIcon className="w-8 h-8" />,
            description: "Building trust through transparent practices",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Sustainability",
            icon: <GlobeAltIcon className="w-8 h-8" />,
            description: "Creating eco-friendly living spaces",
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    const floatingElements = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Banner />
            <section id="about" className="py-12 md:py-20 -top-16 md:-top-20 relative overflow-hidden">
                {/* Background decoration */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />

                {/* Main content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="space-y-8 md:space-y-16"
                    >
                        {/* Image Gallery Section with Fly-eye Swiper */}
                        <div className="mb-8 md:mb-16">
                            <Swiper
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        translate: [0, 0, -400],
                                        rotate: [0, 0, -8],
                                        scale: 0.8,
                                        origin: 'left center'
                                    },
                                    next: {
                                        translate: [0, 0, -400],
                                        rotate: [0, 0, 8],
                                        scale: 0.8,
                                        origin: 'right center'
                                    }
                                }}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                modules={[EffectCreative, Pagination, Navigation, Autoplay]}
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
                            >
                                {galleryImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: activeIndex === index ? 1 : 0.5,
                                                scale: activeIndex === index ? 1 : 0.9
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="relative h-full w-full rounded-xl overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                                            />
                                            <motion.div
                                                className="absolute inset-0 flex flex-col justify-end p-8"
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{
                                                    y: activeIndex === index ? 0 : 50,
                                                    opacity: activeIndex === index ? 1 : 0
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                                                <p className="text-lg text-white/60">{image.description}</p>
                                            </motion.div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Features Section with Enhanced Animations */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div
                                variants={fadeIn}
                                className="relative order-2 md:order-1"
                                animate={floatingAnimation}
                            >
                                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl"> {/* Changed aspect ratio */}
                                    <img
                                        src={five}
                                        alt="About Us"
                                        className="w-full h-full object-cover" // Added proper image styling
                                    />
                                </div>
                                {/* Floating stats card */}
                                <motion.div
                                    className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-xl shadow-xl"
                                    variants={scaleIn}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="text-center">
                                        <span className="block text-3xl font-bold text-blue-600">10+</span>
                                        <span className="text-gray-600">Years Experience</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                className="space-y-6 md:space-y-8 order-1 md:order-2"
                            >
                                <motion.h3
                                    variants={fadeIn}
                                    className="text-2xl md:text-3xl font-semibold text-gray-900"
                                >
                                    Crafting Dreams Into Reality
                                </motion.h3>

                                <motion.p
                                    variants={fadeIn}
                                    className="font-merriweather text-base md:text-lg text-gray-700 leading-relaxed"
                                >
                                    Laxmi Nilayam is a place where your dream home becomes a reality. This gated community
                                    is designed to offer a perfect mix of comfort, style, and convenience.
                                    Madhu Infrastructure Pvt Ltd is reinventing real estate spaces by pairing the industry's top
                                    talents with technology. The brightest of minds in engineering, design and strategy work
                                    behind the scenes to offer the innovative and futuristic real estate developments across
                                    Telangana and Andhra Pradesh.
                                </motion.p>

                                {/* Enhanced Features Grid */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8"
                                >
                                    {[
                                        {
                                            title: "Premium Location",
                                            icon: "🏢",
                                            description: "Prime city location"
                                        },
                                        {
                                            title: "Modern Design",
                                            icon: "✨",
                                            description: "Contemporary architecture"
                                        },
                                        {
                                            title: "Quality Materials",
                                            icon: "🏗️",
                                            description: "Premium construction"
                                        },
                                        {
                                            title: "Expert Team",
                                            icon: "👥",
                                            description: "Professional builders"
                                        }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white p-4 rounded-lg shadow-md"
                                        >
                                            <span className="text-2xl mb-2 block">{feature.icon}</span>
                                            <h4 className="font-semibold">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Enhanced Mission Section */}
                        <motion.div
                            variants={fadeIn}
                            className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-3xl p-6 md:p-12 mt-8 md:mt-16 overflow-hidden"
                        >
                            {/* Animated background elements */}
                            <motion.div
                                className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity
                                }}
                            />
                            <motion.div
                                className="absolute -left-20 -bottom-20 w-72 h-72 bg-purple-200 rounded-full opacity-20"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    rotate: [90, 0, 90]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity
                                }}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                                {/* Mission Content */}
                                <motion.div
                                    className="space-y-4 md:space-y-6"
                                    variants={missionAnimation}
                                >
                                    <div className="flex items-center space-x-3 md:space-x-4">
                                        <div className="w-8 md:w-12 h-1 bg-blue-600"></div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
                                    </div>
                                    <IlluminatedCard className="bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg">
                                        <motion.div
                                            className="relative"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <p className="text-gray-700 font-merriweather leading-relaxed">
                                                Our mission is to build innovative real estate development projects in Andhra Pradesh and
                                                Telangana. We believe in the ability to convert challenging situations into opportunities.
                                                Teamwork being our foundation, we embrace values with an open mind. We follow high
                                                ethical standards, aim to overcome expectations and excel in every project we undertake.
                                                At Laxmi Nilayam, every detail is thoughtfully created to make your life easier and more
                                                enjoyable. It's not just a home—it's a place you'll be proud to call home.
                                                Join us and experience the essence of modern living redefined.
                                            </p>
                                        </motion.div>
                                    </IlluminatedCard>
                                </motion.div>

                                {/* Values Content */}
                                <motion.div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center space-x-3 md:space-x-4">
                                        <div className="w-8 md:w-12 h-1 bg-purple-600"></div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Values</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        {values.map((value, index) => (
                                            <IlluminatedCard key={index} className="relative">
                                                <motion.div
                                                    variants={floatingElements}
                                                    whileHover={{
                                                        y: -5,
                                                        transition: { type: "spring", stiffness: 300 }
                                                    }}
                                                    className={`bg-gradient-to-br ${value.color} text-white p-6 rounded-xl shadow-lg`}
                                                >
                                                    <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-[2px]" />
                                                    <motion.div
                                                        animate={{
                                                            rotate: [0, 5, -5, 0],
                                                            transition: {
                                                                duration: 5,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }
                                                        }}
                                                        className="relative z-10"
                                                    >
                                                        <motion.div
                                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                                            transition={{ type: "spring", stiffness: 300 }}
                                                            className="mb-4 w-12 h-12 mx-auto"
                                                        >
                                                            {value.icon}
                                                        </motion.div>
                                                        <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                                                        <p className="text-sm opacity-90">{value.description}</p>
                                                    </motion.div>
                                                </motion.div>
                                            </IlluminatedCard>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* Add Parallax Text before main content */}
                <div className="py-6 md:py-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <ParallaxText baseVelocity={-5}>LUXURY LIVING STATIC</ParallaxText>
                    <ParallaxText baseVelocity={5}>MODERN LIFESTYLE</ParallaxText>
                </div>
            </section>
        </>
    );
};

export default About;