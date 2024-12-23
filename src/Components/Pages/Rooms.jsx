

const Rooms = ({ room }) => {
    return (
        <div >
            <div key={room.id}  className="bg-white rounded-lg shadow-md overflow-hidden"
            >
                <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                        {room.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {room.description}
                    </p>
                    <button
                        onClick={() => navigate(`/rooms/${room.id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;