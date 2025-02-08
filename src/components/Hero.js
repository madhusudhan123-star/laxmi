import { motion } from "framer-motion";
import video from '../assets/video.mp4'


const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="home"
            className="h-screen relative flex items-center justify-center pt-20"
        >
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=" absolute inset-0" />
            </div>
            <div className="relative text-white text-center z-10">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl font-bold mb-4"
                >
                    Welcome to Laxmi Nilayam
                </motion.h1>
                <motion.p
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl"
                >
                    Where Comfort Meets Modern Living
                </motion.p>
            </div>
        </motion.section>
    );
};

export default Hero;
