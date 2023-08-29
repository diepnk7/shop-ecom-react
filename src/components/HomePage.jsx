import React from "react";
import ProductItems from "./ProductItems";

function HomePage() {
  return (
    <main className="homepage">
      <div className="img-main"></div>
      <div className="brand bg-black">
        <div className="container">
          <div className="flex flex-wrap sm:items-center items-between lg:justify-between justify-center gap-[20px] sm:py-[44px] py-[16px]">
            <img className="md:h-full h-[25px]" src="assets/brand/versace.png" alt="" />
            <img className="md:h-full h-[25px]" src="assets/brand/zara.png" alt="" />
            <img className="md:h-full h-[25px]" src="assets/brand/gucci.png" alt="" />
            <img className="md:h-full h-[21px]" src="assets/brand/prada.png" alt="" />
            <img className="md:h-full h-[21px]" src="assets/brand/calvin-klein.png" alt="" />
          </div>
        </div>
      </div>

      <p className="font-integralcf text-[48px] font-normal text-center mt-[72px] mb-[55px] uppercase">
        NEW ARRIVALS
      </p>

      <ProductItems />

      <div className="container flex items-center justify-center">
        <button
          className="mt-[36px] h-[52px] rounded-[62px] bg-[#F0F0F0] px-[54px] border-[1px] border-[#000] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center text-black"
          value=""
        >
          View All
        </button>
      </div>

      <div className="container flex flex-wrap gap-3 items-center md:justify-between justify-center border-t-[1px] border-t-[#000] border-opacity-[10%] !my-[64px]"></div>

      <p className="font-integralcf text-[48px] font-normal text-center mb-[55px] uppercase">
        top selling
      </p>

      <ProductItems />

      <div className="container flex items-center justify-center">
        <button
          className="mt-[36px] h-[52px] rounded-[62px] bg-[#F0F0F0] px-[54px] border-[1px] border-[#000] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center text-black"
          value=""
        >
          View All
        </button>
      </div>

    </main>
  );
}

export default HomePage;
