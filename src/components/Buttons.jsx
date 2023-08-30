import React from 'react'

function Buttons({text='undefined', text_color='000', bg_color='fff', border_color='fff'}) {
  return (
    <button
      className={`mt-[36px] h-[52px] rounded-[62px] bg-[#${bg_color}] px-[54px] border-[1px] border-[#${border_color}] border-opacity-[10%] font-Satoshi text-[16px] font-medium text-center text-[#${text_color}]`}
      value={text}
    >
      {text}
    </button>
  )
}

export default Buttons