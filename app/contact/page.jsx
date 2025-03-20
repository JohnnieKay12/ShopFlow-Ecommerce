"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                console.error("Error", result.error)
            }
        } catch (error) {
            setStatus("error");
            console.error("Network error:", error);
        }
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
                <div className="flex-1 flex justify-center md:justify-start">
                    {assets.girl_with_headphone_image && (
                        <Image className="max-w-56 md:max-w-72" src={assets.jbl_soundbox_image} alt="JBL Soundbox" width={288} height={288} priority />
                    )}
                </div>
                <div className="flex-1 flex flex-col items-center text-center md:text-left space-y-3 px-4 md:px-0">
                    <h2 className="text-4xl font-semibold">Get In Touch</h2>
                    <p className="max-w-[380px] font-medium text-gray-800/70 ml-24">
                        Have questions? Need support? We're always here to help. Let’s connect and make things happen!
                    </p>
                </div>
                <div className="flex-1 hidden md:flex justify-center md:justify-end">
                    {assets.md_controller_image && (
                        <Image className="max-w-80" src={assets.md_controller_image} alt="Controller Image" width={320} height={320} />
                    )}
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                            rows="5"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition">
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && <p className="text-green-600 text-center mt-3">Message sent successfully!</p>}
                    {status === "error" && <p className="text-red-600 text-center mt-3">Failed to send message. Try again.</p>}
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
