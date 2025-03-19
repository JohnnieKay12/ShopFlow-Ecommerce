import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext();

  // Show only the first 10 products
  const popularProducts = products.slice(0, 10);

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {popularProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div> */}
      <button onClick={() => { router.push('/all-products') }} className="text-lg px-12 py-4 mt-4 border rounded text-gray-500/70 hover:bg-orange-600 hover:text-white transition">
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
