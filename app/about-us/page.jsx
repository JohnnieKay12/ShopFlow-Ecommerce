import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
                {assets.jbl_soundbox_image && (
                    <Image
                        className="max-w-56"
                        src={assets.jbl_soundbox_image}
                        alt="JBL Soundbox"
                        width={224}
                        height={224}
                        priority
                    />
                )}
                <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
                    <h2 className="text-4xl md:text-3xl font-semibold max-w-[290px]">
                        About Us
                    </h2>
                    <p className="max-w-[343px] font-medium text-gray-800/60">
                        From unbeatable prices to a seamless shopping experience—everything you need for a hassle-free purchase.
                    </p>
                </div>
                {assets.md_controller_image && (
                    <Image
                        className="hidden md:block max-w-80"
                        src={assets.md_controller_image}
                        alt="Controller Image"
                        width={320}
                        height={320}
                    />
                )}
                {assets.sm_controller_image && (
                    <Image
                        className="md:hidden"
                        src={assets.sm_controller_image}
                        alt="Small Controller Image"
                        width={200}
                        height={200}
                    />
                )}
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Introduction Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
                    {/* <div className="w-28 h-0.5 ml-80 bg-orange-600 mt-2"></div> */}
                    <p className="mt-4 text-lg text-gray-600">
                    We are a modern eCommerce platform dedicated to providing high-quality products at affordable prices. Our mission is to make online shopping seamless, secure, and enjoyable for everyone. With a carefully curated selection of products, exceptional customer service, and a user-friendly shopping experience, we strive to exceed customer expectations. Whether you're looking for the latest tech gadgets, stylish fashion, or everyday essentials, we are committed to bringing you the best deals without compromising on quality. Join us on our journey to revolutionize online shopping and make it more accessible and rewarding for all.
                    </p>
                </div>

                {/* About Image and Description */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {assets.about_us_image && (
                        <Image
                            src={assets.about_us_image}
                            alt="About Us Image"
                            className="rounded-lg shadow-lg w-full"
                            width={500}
                            height={350}
                        />
                    )}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
                        <div className="w-20 h-0.5 bg-orange-600 mt-2"></div>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Founded with a vision to revolutionize online shopping, we provide a diverse range of products across multiple categories, ensuring that our customers have access to everything they need in one convenient place. Our platform is designed with simplicity and efficiency in mind, offering user-friendly navigation, fast and secure checkout, and reliable shipping to ensure a hassle-free shopping experience.
                            What started as a small idea has grown into a trusted online destination for quality products at competitive prices. We prioritize customer satisfaction by continuously improving our services, expanding our product range, and offering exceptional support. Whether you're shopping for the latest tech, fashion trends, home essentials, or unique finds, we are committed to bringing you the best selection with outstanding service. Our journey is fueled by innovation, passion, and a dedication to making online shopping more accessible, enjoyable, and rewarding for everyone.
                        </p>
                    </div>
                </div>

                {/* Core Features */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { img: assets.fast_delivery_image, title: "Fast Delivery", desc: "We ensure quick and reliable shipping for all your orders." },
                        { img: assets.secure_payment_image, title: "Secure Payments", desc: "Your transactions are safe and encrypted with top security measures." },
                        { img: assets.support_image, title: "24/7 Support", desc: "Our support team is always available to assist you with any inquiries." }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                            {feature.img ? (
                                <Image src={feature.img} alt={feature.title} width={128} height={128} className="mx-auto mb-3 w-32 h-28 md:w-40 md:h-36" />
                            ) : (
                                <p className="text-gray-500">Image not available</p>
                            )}
                            <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
