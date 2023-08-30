import React from "react";
import ProductItems from "./ProductItems";
import Buttons from "./Buttons";

function HomePage() {
  return (
    <div className="homepage">
      <div className="img-main bg-[#F2F0F1] ">
        <div className="container md:flex block">
          <div className="md:w-1/2 w-full">
            <p className="font-integralcf lg:text-[64px] md:text-[50px] text-[36px] font-bold md:leading-[64px] sm:leading-[50px] leading-[36px] text-start md:mt-[103px] pt-[40px] uppercase">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <div className="font-Satoshi font-normal  text-[#000] sm:text-[16px] text-[14px] md:leading-[22px] leading-[20px] opacity-[60%] sm:pb-[35px] md:py-[32px] py-[20px] w-full max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            {/* <Buttons text={'Shop Now'} text_color={'fff'} bg_color={'000'} /> */}
            <button
              className="md:max-w-[210px] w-full h-[52px] rounded-[62px] text-white bg-[#000] px-[54px] border-[1px] border-[#000] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center"
              value=""
            >
              Shop Now
            </button>
            <div className="flex flex-wrap justify-between md:mt-[48px] mt-[22px] font-Satoshi md:pb-[116px] pb-0 w-full divide-x-[1px] divide-white">
              <div>
                <p className="md:text-[40px] text-[24px] font-bold text-black">200+</p>
                <div className="text-[#000] md:text-[16px] text-[12px] font-normal leading-[22px] opacity-[60%]">
                  International Brands
                </div>
              </div>
              <div>
                <p className="md:text-[40px] text-[24px] font-bold text-black">2,000+</p>
                <div className="text-[#000] md:text-[16px] text-[12px] font-normal leading-[22px] opacity-[60%]">
                  High-Quality Products
                </div>
              </div>
              <div>
                <p className="md:text-[40px] text-[24px] font-bold text-black">30,000+</p>
                <div className="text-[#000] md:text-[16px] text-[12px] font-normal leading-[22px] opacity-[60%]">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="assets/bg-img/bg.png"
              alt=""
              className="h-auto w-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="brand bg-black">
        <div className="container">
          <div className="flex flex-wrap sm:items-center items-between lg:justify-between justify-center gap-[20px] sm:py-[44px] py-[16px]">
            <img
              className="md:h-full h-[25px]"
              src="assets/brand/versace.png"
              alt=""
            />
            <img
              className="md:h-full h-[25px]"
              src="assets/brand/zara.png"
              alt=""
            />
            <img
              className="md:h-full h-[25px]"
              src="assets/brand/gucci.png"
              alt=""
            />
            <img
              className="md:h-full h-[21px]"
              src="assets/brand/prada.png"
              alt=""
            />
            <img
              className="md:h-full h-[21px]"
              src="assets/brand/calvin-klein.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <p className="font-integralcf md:text-[48px] text-[32px] font-normal text-center md:mt-[72px] mt-[50px] md:mb-[55px] mb-[32px] uppercase">
        NEW ARRIVALS
      </p>

      <ProductItems />

      <div className="container flex items-center justify-center">
        <button
          className="md:max-w-[218px] w-full md:mt-[36px] mt-[24px] h-[52px] rounded-[62px] bg-white px-[54px] border-[1px] border-[#000] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center text-black"
          value=""
        >
          View All
        </button>
      </div>

      <div className="container flex flex-wrap gap-3 items-center md:justify-between justify-center border-t-[1px] border-t-[#000] border-opacity-[10%] md:!my-[64px] !my-[40px]"></div>

      <p className="font-integralcf md:text-[48px] text-[32px] font-normal text-center md:mb-[55px] mb-[32px] uppercase">
        Top Selling
      </p>

      <ProductItems />

      <div className="container flex items-center justify-center">
        <button
          className="md:max-w-[218px] w-full md:mt-[36px] mt-[24px] h-[52px] rounded-[62px] bg-white px-[54px] border-[1px] border-[#000] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center text-black"
          value=""
        >
          View All
        </button>
      </div>
      <div className=" container rounded-[40px] bg-[#F0F0F0]">
        <p className="md:mt-[150px] mt-[90px] md:pt-[70px] pt-[40px] font-integralcf md:text-[48px] text-[32px] font-bold text-center mb-[55px] md:gap-0 gap-y-[36px] uppercase">
          BROWSE BY dress STYLE
        </p>
        <div className="flex flex-wrap justify-between font-Satoshi text-[36px] font-bold text-black px-[64px] md:pb-[76px] pb-[27px] sm:gap-y-[20px] gap-y-[16px]">
          <a href="#" className="bg-cats h-full md:min-h-[289px] min-h-[190px] w-full xl:max-w-[407px] max-w-full rounded-[20px]">
            <p className="mt-[25px] ml-[36px]">Casual</p>
          </a>
          <a href="#" className="bg-cats h-full md:min-h-[289px] min-h-[190px] w-full xl:max-w-[684px] max-w-full rounded-[20px]">
            <p className="mt-[25px] ml-[36px]">Formal</p>
          </a>
          <a href="#" className="bg-cats h-full md:min-h-[289px] min-h-[190px] w-full xl:max-w-[684px] max-w-full rounded-[20px]">
            <p className="mt-[25px] ml-[36px]">Party</p>
          </a>
          <a href="#" className="bg-cats h-full md:min-h-[289px] min-h-[190px] w-full xl:max-w-[407px] max-w-full rounded-[20px]">
            <p className="mt-[25px] ml-[36px]">Gym</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
