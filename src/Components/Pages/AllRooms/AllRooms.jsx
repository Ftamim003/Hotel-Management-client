import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AllRooms = () => {
    
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    // Fetch room data from the database
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch("http://localhost:5000/all-rooms"); 
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, []);

    const handleCardClick = (roomId) => {
        navigate(`/room-details/${roomId}`);
    };
    return (
        <div className="py-10 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Featured Rooms
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
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
                                <div className="flex items-center">
                                    <span className="text-yellow-500 mr-2">
                                        {Array.from({ length: room.rating }, (_, i) => (
                                            <span key={i}>&#9733;</span> 
                                        ))}
                                    </span>
                                    <span className="text-gray-600">
                                        ({room.rating}/5)
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllRooms;