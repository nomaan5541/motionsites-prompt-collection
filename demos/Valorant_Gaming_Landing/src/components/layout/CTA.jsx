import React from 'react'

const CTA = () =>(
    <div className="flex justify-center align-center bg-[#292929] p-8">
      <ul className="flex sm:flex-row flex-col justify-center align-center">
        <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mr-6 text-white">
          <a href="#">DOWNLOAD GAME CLIENT</a>
        </li>
        <li className="font-poppins font-semibold transition-all ease-in duration-300 relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase mr-6 text-white">
          <a href="#">DOWNLOAD RIOT MOBILE COMPANION APP</a>
        </li>
      </ul>
    </div>
)

export default CTA
