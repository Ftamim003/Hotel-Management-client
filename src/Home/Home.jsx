import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "swiper/css";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";
import Rooms from "../Components/Pages/Rooms";


const Home = () => {
    const rooms = useLoaderData();
    const handleRedirect = () => {
        window.location.href = "/allRooms";
    };


    return (
        <>
       
        <div className="w-full">
            
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

            {/* Map Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Visit Us
                </h2>
                <div className="w-full h-96">
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

            {/* FAQs */}
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured Rooms
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        rooms.map(room => <Rooms room={room}></Rooms>)
                    }
                </div>
                <div>
                    <h2 className="text-3xl text-center font-bold mt-7">FAQs</h2>
                    <div className="collapse collapse-plus bg-base-200 mt-5">

                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is the check-in and check-out time?</div>
                        <div className="collapse-content">
                            <p>Our check-in time is from 2:00 PM and check-out is by 12:00 PM.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What is your cancellation policy?</div>
                        <div className="collapse-content">
                            <p>You can cancel up to 24 hours before check-in for a full refund. Cancellations within 24 hours will incur a charge.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Do you allow pets?</div>
                        <div className="collapse-content">
                            <p>Unfortunately, pets are not allowed in our hotel.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Event hosting information */}


            <div className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">Event Hosting & Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Grand Banquet Hall */}
                    <div className="card shadow-xl border border-base-300 bg-base-100 rounded-md">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/6Hn0G8J/grand-banquets-chembur-mumbai.jpg"
                                alt="Grand Banquet Hall"
                                className="h-48 w-full object-cover rounded-t-md"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-bold mb-2">Grand Banquet Hall</h3>
                            <p className="text-gray-600 mb-4">
                                Perfect for weddings and large gatherings, accommodating up to 500 guests.
                            </p>
                            <p className="font-medium text-blue-600 mb-4">
                                Packages: Wedding, Reception, Anniversary Parties
                            </p>
                            <button className="btn bg-[#28a745] text-white  w-full">
                                Request a Quote
                            </button>
                        </div>
                    </div>

                    {/* Conference Room */}
                    <div className="card shadow-xl border border-base-300 bg-base-100 rounded-md">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/fdfdypX/Modern-meeting-room-with-advanced-technology.webp"
                                alt="Conference Room"
                                className="h-48 w-full object-cover rounded-t-md"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-bold mb-2">Conference Room</h3>
                            <p className="text-gray-600 mb-4">
                                Ideal for corporate meetings, workshops, and seminars with modern amenities.
                            </p>
                            <p className="font-medium text-blue-600 mb-4">
                                Packages: Corporate Events, Seminars, Training Sessions
                            </p>
                            <button className="btn bg-[#28a745] text-white w-full">
                                Request a Quote
                            </button>
                        </div>
                    </div>

                    {/* Outdoor Garden */}
                    <div className="card shadow-xl border border-base-300 bg-base-100 rounded-md">
                        <figure>
                            <img
                                src="https://i.ibb.co.com/5rzd7R7/Mandrake-Hotel-Tropical-Garden-Design-02-1024x683.webp"
                                alt="Outdoor Garden"
                                className="h-48 w-full object-cover rounded-t-md"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-bold mb-2">Outdoor Garden</h3>
                            <p className="text-gray-600 mb-4">
                                An elegant open-air space for parties and celebrations with a scenic view.
                            </p>
                            <p className="font-medium text-blue-600 mb-4">
                                Packages: Birthday Parties, Engagements, Outdoor Weddings
                            </p>
                            <button
                                className="btn bg-[#28a745] text-white w-full"
                                onClick={() => window.location.href = "tel:01791430459"} // 
                            >
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        </>
    );
};

export default Home;
