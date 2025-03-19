import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {

    const [isLiked, setIsLiked] = useState(false); // Track like status

    const { currency, router } = useAppContext()

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-2 w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-72 flex items-center justify-center">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />

                {/* Heart Button */}

                <button 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent clicking the product while clicking heart
                        setIsLiked(!isLiked);

                        if (isLiked) {
                            toast.error("Product unliked"); // Show error toast when unliking
                        } else {
                            toast.success("Product liked"); // Show success toast when liking
                        }
                    }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md transition"
                >
                    <Image
                        className="h-3 w-3"
                        src={isLiked ? assets.heart_filled_icon : assets.heart_icon} 
                        alt="heart_icon"
                    />
                </button>

            </div>

            <p className="md:text-base text-xl sm:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full sm:text-sm text-sm text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-base">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-4 w-4"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{Math.floor(product.offerPrice * 1000).toLocaleString('en-NG')}</p>
                <button className=" max-sm: px-5 py-2 text-gray-500 border border-gray-500/20 rounded-full text-sm transition hover:bg-orange-600 hover:text-white">
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard