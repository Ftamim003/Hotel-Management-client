import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "swiper/css";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";
import Rooms from "../Components/Pages/Rooms";
import { motion } from "framer-motion";

const Home = () => {

    const rooms = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleRedirect = () => {
        window.location.href = "/allRooms";
    };



    useEffect(() => {
        fetch('https://modern-hotel-booking-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error("Error fetching reviews:", err));

        setShowModal(true);
    }, []);

    console.log(reviews)

    const SpecialOffersModal = ({ show, onClose }) => {
        if (!show) return null;

        return (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[50] backdrop-blur-sm animate-fadeIn">
                <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 md:w-1/2 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                        aria-label="Close Modal"
                    >
                        &times;
                    </button>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1c3d5a] mb-6">
                        ❄️ Special Offers for Winter! ❄️
                    </h2>
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img
                            src="https://i.ibb.co.com/cyQFSH4/stock-vector-winter-special-offer-shop-now-sale-vector-web-banner-lettering-template-2198387813.jpg"
                            alt="Special Offers"
                            className="w-full h-56 object-cover scale-110 hover:scale-100 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
                        🏨 <strong>Exclusive 20% off</strong> on all bookings! Book now and save big in this winter season. Offer valid until <span className="text-[#28a745] font-semibold">January 31st</span>.
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="bg-[#28a745] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#21773b] transition-colors duration-300"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>

            <div className="w-full ">
                <SpecialOffersModal show={showModal} onClose={() => setShowModal(false)} />

                {/* Banner Section */}
                <div className="relative w-full h-72 lg:h-96 bg-gray-900">
                    <Swiper
                        navigation={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        className="w-full h-72 lg:h-96"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src="https://i.ibb.co.com/gy84qXL/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living.jpg"
                                    alt="Luxury Rooms"
                                    className="w-full h-72 md:h-96 lg:h-96 object-cover"
                                />
                                <div className="absolute top-1/3 left-5 md:left-16 text-white">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                                        Discover Luxury Rooms
                                    </h1>
                                    <p className="mb-4 text-center text-white font-bold text-xl">
                                        Experience the best comfort and luxury.
                                    </p>
                                    <button
                                        onClick={handleRedirect}
                                        aria-label="View Rooms"
                                        className="bg-[#28a745] hover:bg-[#3f814e] text-white px-4 py-2 rounded"
                                    >
                                        View Rooms
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src="https://i.ibb.co.com/kMNdrV6/interior-modern-comfortable-hotel-room.jpg" // Replace with your actual image path
                                    alt="Luxury Rooms"
                                    className="w-full h-72 md:h-96 lg:h-96 object-cover" // Added responsive classes
                                />
                                <div className="absolute top-1/3 left-5 md:left-16 text-white">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                                        Discover Luxury Rooms
                                    </h1>
                                    <p className="mb-4 text-center text-gray-500 font-bold text-xl">
                                        Experience the best comfort and luxury.
                                    </p>
                                    <button
                                        onClick={handleRedirect}
                                        aria-label="View Rooms"
                                        className="bg-[#28a745] hover:bg-[#3f814e] text-white px-4 py-2 rounded"
                                    >
                                        View Rooms
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src="https://i.ibb.co.com/9s5DL16/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" // Replace with your actual image path
                                    alt="Luxury Rooms"
                                    className="w-full h-72 md:h-96 lg:h-96 object-cover" // Added responsive classes
                                />
                                <div className="absolute top-1/3 left-5 md:left-16 text-white">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center3cde">
                                        Discover Luxury Rooms
                                    </h1>
                                    <p className="mb-4 text-center text-gray-500 font-bold text-xl">
                                        Experience the best comfort and luxury.
                                    </p>
                                    <button
                                        onClick={handleRedirect}
                                        aria-label="View Rooms"
                                        className="bg-[#28a745] hover:bg-[#3f814e] text-white px-4 py-2 rounded"
                                    >
                                        View Rooms
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

               

                <div className="container mx-auto px-4 py-10">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Featured Rooms
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            rooms.map((room, index) => (
                                <motion.div
                                    key={room.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Rooms room={room} />
                                </motion.div>
                            ))
                        }

                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-center mb-6">What Our Guests Say</h2>
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {reviews.map((review) => (
                                <SwiperSlide key={review._id}>
                                    <div className="flex p-5 bg-gray-100 rounded-lg shadow-md">
                                        {/* Room Image */}
                                        <div>
                                            <img
                                                src={review.roomImage}
                                                alt={review.roomName}
                                                className="w-24 h-24 object-cover rounded-md mr-4"
                                            />
                                            <h4 className="text-sm text-gray-600 mb-2 ">{review.roomName}</h4>
                                        </div>
                                        {/* Review Content */}
                                        <div className="flex-grow ">
                                            <h3 className="text-xl font-bold text-blue-800 mb-2">{review.username}</h3>

                                            <p className="text-md text-gray-700">{review.comment}</p>
                                        </div>

                                        {/* Rating and Timestamp */}
                                        <div className="flex flex-col items-center ml-4 text-gray-600">
                                            <div className="text-yellow-500">
                                                {"⭐".repeat(Math.round(review.rating))}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                {new Date(review.timestamp).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div>
                        <h2 className="text-3xl text-center font-bold mt-7">FAQs</h2>
                        <div>
                            <motion.div
                                className="collapse collapse-plus bg-base-200 mt-5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    What is the check-in and check-out time?
                                </div>
                                <div className="collapse-content">
                                    <p>Our check-in time is from 2:00 PM and check-out is by 12:00 PM.</p>
                                </div>
                            </motion.div>

                        </div>
                        <div >
                            <motion.div className="collapse collapse-plus bg-base-200 "
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">What is your cancellation policy?</div>
                                <div className="collapse-content">
                                    <p>You can cancel up to 24 hours before check-in for a full refund. Cancellations within 24 hours will incur a charge.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div >
                            <motion.div className="collapse collapse-plus bg-base-200 "
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">Do you allow pets?</div>
                                <div className="collapse-content">
                                    <p>Unfortunately, pets are not allowed in our hotel.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Event hosting information */}


                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Visit Us
                    </h2>
                    <div className="w-full h-96 m-5">
                        <MapContainer
                            center={[23.8103, 90.4125]}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="h-full w-full rounded-md shadow-lg"
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    <strong>Hotel Location</strong> <br />
                                    Come visit us for an unforgettable experience!
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Home;
