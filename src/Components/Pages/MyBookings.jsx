import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData, } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxios from '../../Hooks/useAxios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState(null);

    const [updateDateModalOpen, setUpdateDateModalOpen] = useState(false); 
    const [selectedBookingId, setSelectedBookingId] = useState(null); 
    const [newBookingDate, setNewBookingDate] = useState(new Date())
    const { user } = useContext(AuthContext)

    const axiosSecure=useAxios()

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            

            axiosSecure.get(`/user-bookings?email=${user?.email}`)
            .then(res=>{setBookings(res.data)})
            
            if (response.ok) {
               
            } else {
                toast.error(data.message || 'Failed to fetch bookings');
            }
        } catch (error) {
            toast.error('Error fetching bookings');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = async (bookingId) => {
        const result = await Swal.fire({
            title: 'Are you sure to cancel?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it',
        });
        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://modern-hotel-booking-server.vercel.app/cancel-booking/${bookingId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    await Swal.fire({
                        title: 'Cancelled!',
                        text: 'Your booking has been cancelled successfully.',
                        icon: 'success',
                        confirmButtonColor: '#28a745',
                    });
                    fetchBookings(); // Refresh bookings
                } else {
                    await Swal.fire({
                        title: 'Error!',
                        text:  data.error || 'Failed to cancel the booking. Please try again later.',
                        icon: 'error',
                        confirmButtonColor: '#d33',
                    });
                }
    
            } catch (error) {
                toast.error('Error cancelling booking');
            }
        }
    };

    const handleUpdateDate = (bookingId) => {
        setSelectedBookingId(bookingId);  // Store the selected booking ID
        setUpdateDateModalOpen(true);  // Open the modal for date update
    };

    const handleDateUpdateSubmit = async () => {
        const newDate = newBookingDate.toISOString();
        if (newDate) {
            try {
                const response = await fetch(`https://modern-hotel-booking-server.vercel.app/update-booking-date/${selectedBookingId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ newDate }),
                });

                if (response.ok) {
                    toast.success('Booking date updated successfully');
                    fetchBookings();
                    setUpdateDateModalOpen(false);
                } else {
                    toast.error('Failed to update booking date');
                }
            } catch (error) {
                toast.error('Error updating booking date');
            }
        }
    };


    const handleAddReview = async (reviewData, bookingId) => {
        if (!bookingId) {
            console.error("Room ID is undefined.");
            return;
        }
    
        try {
            const response = await fetch(`https://modern-hotel-booking-server.vercel.app/rooms/${bookingId}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewData),
            });
    
            if (!response.ok) {
                throw new Error("Failed to add review.");
            }
    
            const updatedRoom = await response.json();
            console.log("Review added successfully:", updatedRoom);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>
                                    <img
                                        src={booking.roomImage}
                                        alt={booking.roomName}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                </td>
                                <td>{booking.roomName}</td>
                                <td>${booking.roomPrice}</td>
                                <td>{booking.bookingDate}</td>
                                <td>
                                    <button
                                        className="btn btn-xs btn-error "
                                        onClick={() => handleCancel(booking?._id)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-xs btn-info "
                                        onClick={() => handleUpdateDate(booking?._id)}
                                    >
                                        Update Date
                                    </button>
                                    <button
                                       onClick={() => {
                                        if (user) {
                                            setSelectedRoomId(booking?.roomId);
                                            setReviewModalOpen(true);
                                            
                                        } else {
                                            Swal.fire({
                                                position: "top-end",
                                                title: "You have to login first to give a review",
                                                timer: 3000,
                                                showConfirmButton: false,
                                            });
                                        }
                                    }}
                                        className="btn btn-xs btn-primary  mt-2"
                                    >
                                         Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Review modal */}
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
                                   
                                },selectedRoomId);
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
           

           {updateDateModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                        <h2 className="text-2xl font-bold text-center mb-4">Update Booking Date</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select New Booking Date</span>
                            </label>
                            <DatePicker
                                selected={newBookingDate}
                                onChange={(date) => setNewBookingDate(date)}
                                minDate={new Date()}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="modal-action flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={() => setUpdateDateModalOpen(false)}
                                className="btn btn-outline"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDateUpdateSubmit}
                                className="btn btn-primary"
                            >
                                Update Date
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyBookings;
