"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact()  {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

    }

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
                <div className="flex-1 flex justify-center md:justify-start">
                    {assets.girl_with_headphone_image && (
                        <Image
                            className="w-44 md:w-72"
                            src={assets.jbl_soundbox_image}
                            alt="JBL Soundbox"
                            width={288}
                            height={288}
                            priority
                        />
                    )}
                </div>
                <div className="flex-1 flex flex-col items-center text-center md:text-left space-y-3 px-4 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-semibold">Get In Touch</h2>
                    <p className="max-w-md font-medium text-gray-800/70">
                        Have questions? Need support? We're always here to help. Let’s connect and make things happen!
                    </p>
                </div>
                <div className="flex-1 hidden md:flex justify-center md:justify-end">
                    {assets.md_controller_image && (
                        <Image
                            className="w-60 md:w-80"
                            src={assets.md_controller_image}
                            alt="Controller Image"
                            width={320}
                            height={320}
                        />
                    )}
                </div>
            </div>

            {/* Why Contact Us? */}
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">Why Contact Us?</h2>
                <p className="max-w-2xl mx-auto text-gray-700 mt-4">
                    Whether you have a business inquiry, need technical support, or just want to say hi, we’d love to hear from you.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[{
                        icon: <FaPhoneAlt />, title: "Quick Response", text: "Our support team is always ready to assist you within 24 hours."
                    }, {
                        icon: <FaEnvelope />, title: "Email Support", text: "Send us an email, and we’ll get back to you as soon as possible."
                    }, {
                        icon: <FaMapMarkerAlt />, title: "Visit Us", text: "Drop by our office for a coffee and a quick chat."
                    }].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="text-orange-600 text-4xl">{item.icon}</div>
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="text-gray-600 mt-2 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Details & Map */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-xl shadow-xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Office</h2>
                        <div className="w-24 md:w-32 h-1 bg-orange-600 mb-8 mx-auto"></div>
                        <p className="text-gray-700 flex items-center gap-3 text-lg">
                            <FaMapMarkerAlt className="text-orange-600 text-xl" /> 
                            39 Enoma Ago Palace Way, Lagos, Nigeria
                        </p>
                        <p className="text-gray-700 flex items-center gap-3 text-lg mt-4">
                            <FaPhoneAlt className="text-orange-600 text-xl" /> 
                            +234 815 282 6507
                        </p>
                        <p className="text-gray-700 flex items-center gap-3 text-lg mt-4">
                            <FaEnvelope className="text-orange-600 text-xl" /> 
                            johnniuc1@gmail.com
                        </p>
                        <div className="flex justify-center gap-6 mt-8 text-3xl">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                                <a key={index} href="#" className="text-orange-600 hover:text-orange-700 transition">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                    {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> */}
                    <iframe
                        className="w-full max-w-[1200px] h-72 md:h-[500px] lg:h-[400px] rounded-xl shadow-lg border-4 border-orange-500"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1044987790306!2d3.3177439!3d6.508455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8eeb5c1be791%3A0x7e913a6784bf02cd!2s39%20Enoma%20St%2C%20Ilasamaja%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742487092775!5m2!1sen!2sng"
                        style={{ border: "none" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    </div>
                </div>

               {/* Contact Form */}
                <div className="bg-white w-full max-w-4xl p-8 md:p-12 rounded-xl shadow-xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {['Name', 'Email', 'Message'].map((field, index) => (
                            <div key={index}>
                                <label className="block text-gray-700 mb-2 text-lg">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                {field !== 'Message' ? (
                                    <input 
                                        type= "text"
                                        name= "name"
                                        value={formData.name}
                                        onChange={handleChange} 
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-lg" 
                                        placeholder= "Your Name"
                                        required 
                                    />
                                ) : (
                                    <textarea
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-lg" 
                                        rows="6" 
                                        placeholder="Your Message" 
                                        required
                                    ></textarea>
                                )}
                            </div>
                        ))}
                        <button className="w-full bg-orange-600 text-white py-3 text-lg rounded-lg hover:bg-orange-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Contact;