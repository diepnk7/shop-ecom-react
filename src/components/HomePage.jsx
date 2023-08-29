import React from 'react'

function HomePage() {
  return (
    <main className='homepage'>
        <div className='img-main'>

        </div>
        <div className='brand bg-black'>
            <div className=' container'>
                <div className='flex items-center justify-between py-[44px]'>
                    <img className='' src='assets/brand/versace.png' alt='' />
                    <img className='' src='assets/brand/zara.png' alt='' />
                    <img className='' src='assets/brand/gucci.png' alt='' />
                    <img className='' src='assets/brand/prada.png' alt='' />
                    <img className='' src='assets/brand/calvin-klein.png' alt='' />
                </div>
            </div>
        </div>

        <p className='font-integralcf text-[48px] font-bold text-center mt-[72px] mb-[55px]'>NEW ARRIVALS</p>

        <div className='items'>
            <div className='image'></div>
            <p className='name'></p>
            {/* <Typography component="legend">Controlled</Typography>
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            /> */}
        </div>
    </main>
  )
}

export default HomePage