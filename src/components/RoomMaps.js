import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import one from "../assets/suone.jpg"
import two from "../assets/sutwo.jpg"
import three from "../assets/suthree.jpg"
import four from "../assets/sufour.jpg"
import five from "../assets/sufive.jpg"
import six from "../assets/susix.jpg"

const RoomMaps = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const floorPlans = [
        {
            title: "2 BHK Classic",
            image: one,
            description: "Perfect for small families"
        },
        {
            title: "2 BHK Premium",
            image: two,
            description: "Luxury living with extra space"
        },
        {
            title: "3 BHK Standard",
            image: three,
            description: "Spacious family living"
        },
        {
            title: "",
            image: four,
            description: ""
        },
        {
            title: "",
            image: five,
            description: ""
        }
    ];

    return (
        <section className="py-8 md:py-16 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Floor Layout Maps
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // Mobile first approach
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 1.2,
                                spaceBetween: 15
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        className="py-4 md:py-8 px-2 md:px-0"
                    >
                        {floorPlans.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src={plan.image}
                                        alt={plan.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                        opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white">
                                                {plan.title}
                                            </h3>
                                            {plan.description && (
                                                <p className="text-sm md:text-base text-gray-200 mt-2 line-clamp-2">
                                                    {plan.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default RoomMaps;
