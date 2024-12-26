import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AllRooms = () => {
    
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState(""); 
    const [maxPrice, setMaxPrice] = useState("");
    const navigate = useNavigate();


    const fetchRooms = async (min, max) => {
        try {
            const response = await fetch(
                `https://modern-hotel-booking-server.vercel.app/all-rooms?minPrice=${min || 0}&maxPrice=${max || Infinity}`
            );
            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

      // Fetch all rooms initially
      useEffect(() => {
        fetchRooms();
    }, []);

    // Handle Filter Button Click
    const handleFilter = () => {
        fetchRooms(minPrice, maxPrice);
    };

   

    const handleCardClick = (roomId) => {
        navigate(`/room-details/${roomId}`);
    };
    return (
        <div className="py-10 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured Rooms
                </h2>
                <div className="flex justify-center items-center mb-8 p-3">
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="p-2 border rounded w-36"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="p-2 border rounded w-36"
                    />
                    <button
                        onClick={handleFilter}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Filter
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index)  => (
                        <motion.div
                         key={room.id}
                         initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
                            onClick={() => handleCardClick(room._id)}
                        >
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {room.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {room.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 font-bold">
                                        ${room.price}
                                    </span>
                                    <span className="text-yellow-500 mr-2">
                                        {Array.from({ length: room.rating }, (_, i) => (
                                            <span key={i}>&#9733;</span> 
                                        ))}
                                    </span>
                                    {/* <span className="text-gray-600">
                                        ({room.rating}/5)
                                    </span> */}
                                </div>
                            </div>
                        
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllRooms;