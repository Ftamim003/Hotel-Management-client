import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <motion.h1
                    className="text-4xl font-bold text-center mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Us
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section: Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img
                            src="https://i.ibb.co/1qXHkG7/christian-lambert-vm-IWr0-Nnp-CQ-unsplash.jpg"
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Right Section: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-[#1C3D5A] mb-4">
                            Our Story
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Welcome to our hotel booking platform! Our mission is to make finding
                            your perfect stay effortless and enjoyable. With years of experience
                            in the travel industry, we partner with top hotels to bring you the
                            best deals, comfortable stays, and unforgettable experiences.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1C3D5A] mb-4">
                            Why Choose Us?
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Wide selection of hotels and rooms across the globe.</li>
                            <li>Easy-to-use platform with secure payment options.</li>
                            <li>24/7 customer support to assist you anytime.</li>
                            <li>Transparent pricing with no hidden fees.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
