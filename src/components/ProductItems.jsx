import React from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const labels: { [index: string]: string } = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '5',
  4.5: '4.5',
  5: '5',
};

function ProductItems() {
  const value = 4.5;
  return (
    // get code from here https://reactjsexample.com/
    // here true https://tailwindui.com/components/ecommerce/components/product-lists
    <div className="product-items container">
      <div className="bg-white">
        <div className="mx-auto">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a key="" href="" className="group">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-[20px] bg-gray-200">
                <img src="assets/product-image/product-image-1.png" alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-[16px] font-Satoshi text-[20px] font-bold ">
                T-SHIRT WITH TAPE DETAILS
              </h3>
              <div className='flex font-Satoshi text-[14px] font-normal'>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box><span className='text-[#000] opacity-[60%]'>/5</span>
              </div>
              <div className="flex gap-[10px]">
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-black">$120</p>
              </div>
            </a>

            <a key="" href="" className="group">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-[20px] bg-gray-200">
                <img src="assets/product-image/product-image-2.png" alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-[16px] font-Satoshi text-[20px] font-bold ">
                SKINNY FIT JEANS
              </h3>
              <div className='flex font-Satoshi text-[14px] font-normal'>
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box><span className='text-[#000] opacity-[60%]'>/5</span>
              </div>
              <div className="flex gap-[10px]">
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-black">$240</p>
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-[#000] opacity-[60%] line-through">$260</p>
                <div className='mt-[11px] font-Satoshi font-normal bg-[#f33] bg-opacity-[10%] rounded-[62px]'>
                  <p className="text-[12px] text-[#FF3333] py-[6px] px-[14px]">-20%</p>
                </div>
              </div>
            </a>

            <a key="" href="" className="group">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-[20px] bg-gray-200">
                <img src="assets/product-image/product-image-3.png" alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-[16px] font-Satoshi text-[20px] font-bold ">
                CHECKERED SHIRT
              </h3>
              <div className='flex font-Satoshi text-[14px] font-normal'>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box><span className='text-[#000] opacity-[60%]'>/5</span>
              </div>
              <div className="flex gap-[10px]">
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-black">$180</p>
              </div>
            </a>

            <a key="" href="" className="group">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-[20px] bg-gray-200">
                <img src="assets/product-image/product-image-4.png" alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-[16px] font-Satoshi text-[20px] font-bold ">
                SLEEVE STRIPED T-SHIRT
              </h3>
              <div className='flex font-Satoshi text-[14px] font-normal'>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box><span className='text-[#000] opacity-[60%]'>/5</span>
              </div>
              <div className="flex gap-[10px]">
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-black">$120</p>
                <p className="mt-[8px] font-Satoshi text-[24px] font-bold text-[#000] opacity-[60%] line-through">$160</p>
                <div className='mt-[11px] font-Satoshi font-normal bg-[#f33] bg-opacity-[10%] rounded-[62px]'>
                  <p className="text-[12px] text-[#FF3333] py-[6px] px-[14px]">-30%</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItems