import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Provider/AuthProvider";


const SingleRoom = () => {
    // Get the room data from loader
    const room = useLoaderData(); // Data will be available here
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    const [bookingDate, setBookingDate] = useState(null);
    const { user } = useContext(AuthContext);
    //console.log(user)

    const handleAddReview = async (reviewData) => {
        try {
            const response = await fetch(`http://localhost:5000/rooms/${room._id}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewData),
            });
            if (!response.ok) {
                throw new Error("Failed to add review.");
            }
            const updatedRoom = await response.json();
            // Update room details with new review
        } catch (error) {
            console.error(error);
        }
    };

    const handleBooking = async () => {
        try {
            const response = await fetch(`http://localhost:5000/book-room/${room._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    bookingDate,
                    user: user.email,
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to book room.");
            }
            alert("Booking confirmed!");
        } catch (error) {
            console.error(error);
        }
    };

    if (!room) {
        return <div className="text-center py-10">Loading room details...</div>; // Loading state while waiting for data
    }

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-4">{room?.name}</h1>
            <img src={room.image} alt={room.name} className="w-full rounded-lg mb-6" />
            <p className="text-lg mb-4">{room.description}</p>
            <p className="text-lg mb-4">Price: ${room.price}</p>
            <p className="text-lg mb-4">Rating: {room.rating}/5</p>

            {/* Reviews */}
            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            {room.reviews.length > 0 ? (
                <ul className="space-y-4">
                    {room.reviews.map((review) => (
                        <li key={review.id} className="bg-gray-100 p-4 rounded-lg shadow">
                            <p><strong>{review.username}</strong> ({new Date(review.timestamp).toLocaleDateString()})</p>
                            <p>Rating: {review.rating}/5</p>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No reviews available for this room.</p>
            )}

            {/* Add Review Button */}
            <button
                onClick={() => setReviewModalOpen(true)}
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow"
            >
                Give Review
            </button>

            {/* Book Now Button */}
            <button
                onClick={() => setBookingModalOpen(true)}
                className="mt-6 ml-4 bg-green-500 text-white px-4 py-2 rounded shadow"
            >
                Book Now
            </button>

            {/* Review Modal */}

            {reviewModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Add Review</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                handleAddReview({
                                    username: user?.displayName
                                        || "",
                                    rating: formData.get("rating"),
                                    comment: formData.get("comment"),
                                    timestamp: new Date().toISOString(),
                                });
                                setReviewModalOpen(false);
                            }}
                            className="space-y-4"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={user?.displayName
                                        || ""}
                                    readOnly
                                    className="input input-bordered w-full text-black"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    min="1"
                                    max="5"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea
                                    name="comment"
                                    rows="4"
                                    required
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                            <div className="modal-action flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setReviewModalOpen(false)}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {/* Booking Modal */}
            {bookingModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-white rounded-lg shadow-lg max-w-md w-full  p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Confirm Booking</h2>
                        <div className="space-y-4">
                            <p>
                                <span className="font-semibold">Room:</span> {room.name}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span> ${room.price}
                            </p>
                            <p>
                                <span className="font-semibold">Description:</span> {room.description}
                            </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Booking Date:</span>
                                </label>
                                <DatePicker
                                    selected={bookingDate}
                                    onChange={(date) => setBookingDate(date)}
                                    minDate={new Date()}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="modal-action flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setBookingModalOpen(false)}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBooking}
                                    className="btn btn-primary"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SingleRoom;
