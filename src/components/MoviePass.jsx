import React from "react";
import {Link} from "react-router-dom";
const MoviePass = () => {


  return (
    <div className="w-full min-h-screen bg-[#222222] text-white flex flex-col items-center justify-start py-10">
       <div className="flex flex-col gap-y-4 items-center">
         <div className="flex items-center gap-x-2">
          <img src="https://www.paribucineverse.com/assets/img/icons/cgv-pass-sm.svg" alt="" />
          <h1 className="text-5xl font-bold tracking-widest">CGV MoviePass</h1>
         </div>
         <p className="text-gray-400 leading-9 text-lg text-center">Sinemada film izlemenin EN kolay, EN hızlı ve EN lezzetli yolu CGV MoviePass’te! Haydi hiç <br /> vakit kaybetmeden, paketini seç sinemaya gel! CGV Para’larınla hem mısır hem de sürpriz <br /> hediyeler senin olsun.</p>
         <Link className="underline tracking-wider text-lg" to="/">Detaylı Bilgi İçin Tıkla</Link>
       </div>
       <ul className="mt-20 w-[90%] flex items-center justify-between p-1">
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
           <div>
            <img src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png" alt="" />
           </div>
           <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">100 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>100 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>Orta Boy Mısır</span>
              </div>
            </div>
           </div>
           <div className="w-full flex flex-col items-center gap-y-4 mt-10">
            <div>
            <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">Satın Al</button>
            </div>
            <div>
            <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
           </div>
        </li>
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
           <div className="relative">
            <img src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png" alt="" />
            <span className="bg-red-600 px-4 py-2 rounded-2xl absolute top-32 -left-20">POPÜLER</span>
           </div>
           <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">200 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>200 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>Büyük Boy Mısır</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>Sürpriz Hediye</span>
              </div>
            </div>
           </div>
           <div className="w-full flex flex-col items-center gap-y-4 ">
            <div>
            <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">Satın Al</button>
            </div>
            <div>
            <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
           </div>
        </li>
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
           <div>
            <img src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png" alt="" />
           </div>
           <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">300 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>300 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>Kova Boy Mısır</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png" alt="" />
                <span>Sürpriz Hediye</span>
              </div>
            </div>
           </div>
           <div className="w-full flex flex-col items-center gap-y-4 mt-10">
            <div>
            <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">Satın Al</button>
            </div>
            <div>
            <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
           </div>
        </li>
       </ul>
    </div>
  );
};

export default MoviePass;
