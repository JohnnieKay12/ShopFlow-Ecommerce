"use client"
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const {openSignIn} = useClerk()
  const pathname = usePathname();

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-6 lg:gap-10 max-md:hidden">
        <Link href="/" className={`relative transition text-base md:text-lg ${pathname === "/" ? "text-gray-900 border-b-2 border-orange-600" : "hover:border-b-2 hover:border-orange-600"}`}>
          Home
        </Link>
        <Link href="/all-products" className={`relative transition text-base md:text-lg ${pathname === "/all-products" ? "text-gray-900 border-b-2 border-orange-600" : "hover:border-b-2 hover:border-orange-600"}`}>
          Shop
        </Link>
        <Link href="/about-us" className={`relative transition text-base md:text-lg ${pathname === "/about-us" ? "text-gray-900 border-b-2 border-orange-600" : "hover:border-b-2 hover:border-orange-600"}`}>
          About Us
        </Link>
        <Link href="/contact" className={`relative transition text-base md:text-lg ${pathname === "/contact" ? "text-gray-900 border-b-2 border-orange-600" : "hover:border-b-2 hover:border-orange-600"}`}>
          Contact
        </Link>

        <Link href="/cart"  >
          {<CartIcon />}
        </Link>


        {isSeller && <button onClick={() => router.push('/seller')} className="text-base md:text-sm  font-medium border px-5 py-1.5 rounded-full text-gray-900 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-md">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4">
        {/* Search Icon */}
        <div className="relative flex items-center" ref={searchRef}>
          <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" src={assets.search_icon} alt="search icon" onClick={() => setIsSearchOpen(!isSearchOpen)} />
          {/* Full-screen Search Box */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full max-w-3xl p-3 text-lg border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-orange-500 transition-all duration-300"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setIsSearchOpen(false);
                  }}
                />
                {/* Close Button */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute top-1 right-2 text-gray-500 text-lg font-bold hover:text-gray-800"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
        {
          user
            ? <>
            <UserButton>
              <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
              </UserButton.MenuItems>
            </UserButton>
          </>
          : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
            Account
          </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-base md:text-base font-medium border px-5 py-1.5 mr-2 rounded-full text-gray-900 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-md">Seller Dashboard</button>}
        {
          user
            ? <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={()=> router.push('/')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={()=> router.push('/all-products')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
              </UserButton.MenuItems>
            </UserButton>
          </>
          : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
            Account
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;