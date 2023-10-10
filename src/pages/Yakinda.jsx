import React from "react";
import Footer from "../components/Footer";
import YakindaPageComp from "../components/YakindaPageComp";
import {NavLink} from "react-router-dom";


const Yakinda = () => {
 

  return (
    <div className="w-full min-h-screen bg-[#121212] py-1">
      <div className="w-full sm:h-[400px] h-[200px]  relative">
        <img className="w-full h-full object-cover" src="/images/cinema.png" alt="" />
        <span className="absolute top-[50%] sm:left-[47%] left-[40%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
          Yakında
        </span>
      </div>
      <div className="text-white sm:mt-28 mt-10 py-2 ml-10 flex items-center gap-x-1">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
          alt=""
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
        />
        <span className="text-gray-400 font-bold text-lg">Yakında</span>
      </div>
      <div className="text-white flex  items-center gap-y-5 text-3xl gap-x-5 mt-[50px] ml-10">
          <NavLink to="/vizyon">Vizyonda</NavLink>
          <NavLink to="/yakinda">Yakinda</NavLink>
      </div>
      <div className="text-white sm:mt-24 mt-1 sm:px-10 px-2">
        <ul className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-x-3 sm:gap-y-0 gap-y-10 py-20">
          <YakindaPageComp />
        </ul>
      </div>
      <div className="rounded-3xl h-[275px] bg-[#2E2E2E] flex items-center justify-between px-10 py-10 container mx-auto">
        <div className="flex flex-col items-center justify-around gap-y-10">
            <h1 className="text-3xl font-bold tracking-wider text-white">Mobil Uygulamamızı <br /> Keşfedin!</h1>
            <div className="flex items-center gap-x-4">
                <img src="https://www.paribucineverse.com/assets/img/icons/store/google_play_2x.png" alt="" />
                <img src="https://www.paribucineverse.com/assets/img/icons/store/app_store_2x.png" alt="" />
            </div>
        </div>
        <div className="flex items-center gap-x-5 mb-6">
            <img src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_3x.png" alt="" />
            <img src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_avatar_3x.png" alt="" />
        </div>
      </div>
       <div className="mt-11">
        <Footer />
       </div>
    </div>
  );
};

export default Yakinda;
