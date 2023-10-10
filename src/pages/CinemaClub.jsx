import React from "react";
import UyelikFırsat from "../components/UyelikFırsat";
import AcaVipUye from "../components/AcaVipUye";
import Collapese from "../components/Collapese";
import Footer from "../components/Footer";


const CinemaClub = () => {



  
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1 flex flex-col items-center justify-start">
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img
          src="https://www.paribucineverse.com/assets/img/page-cinemaclub/cinema-hero-.png"
          alt=""
          className="brightness-90 sm:h-full sm:w-full w-[50%] h-[50%] object-cover"
        />
        <div className="text-white flex flex-col gap-y-8 absolute top-[10%]  sm:left-[20%] left-[2%] items-center justify-center sm:px-20 px-2">
          <img
            src="https://www.paribucineverse.com/assets/img/page-cinemaclub/logo.svg"
            alt=""
          />
          <p className="sm:text-lg text-sm tracking-wide text-center leading-loose">
            CGV Cinema Club’a üye ol veya giriş yap, anında CGV Para kazan,
            istediğin zaman kullan!
          </p>
          <div className="flex items-center gap-x-10">
            <button className="bg-white text-black sm:text-base text-xs px-10 py-3 rounded-3xl">
              Hemen Üye Ol
            </button>
            <button className="text-white bg-[#98A726] px-10 py-3 rounded-3xl sm:text-base text-xs ">
              Giriş Yap
            </button>
          </div>
        </div>
        <div className="sm:text-3xl text-xl ml-10 sm:mt-5 mt-64 font-bold tracking-wider">
          <h1>CGV Cinema Club’ta yepyeni bir dünya: CGV Para!</h1>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-between w-full px-10">
        {/* --------section 1-------- */}
        <div className="sm:mt-96 mt-64 mb-10 w-full flex flex-col items-center gap-y-2">
          <div className="bg-gradient-to-t from-stone-900 via-stone-800 to-neutral-500 relative rounded-lg w-[289px] h-[229px] flex items-start justify-center p-3">
            <div className="flex flex-col gap-y-5 mt-16">
              <h1 className="text-4xl font-bold text-gray-400">01</h1>
              <p className="text-xl tracking-wider">
                CGV Cinema Club’a Üye Ol!
              </p>
            </div>
            <div>
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/iconarea1.png"
                alt=""
              />
            </div>
            <div className="bg-[#98A726] w-[80%] absolute bottom-0 py-[2px] "></div>
          </div>
          <div className="mt-2 text-xs text-center">
            <h1>Yenilenen CGV Cinema Club’a üye ol.</h1>
          </div>
        </div>
        {/* --------section 2-------- */}
        <div className="sm:mt-96 mt-16 mb-10 w-full flex flex-col items-center gap-y-2">
          <div className="bg-gradient-to-t from-stone-900 via-stone-800 to-neutral-500 relative rounded-lg w-[289px] h-[229px] flex items-start justify-center p-3">
            <div className="flex flex-col gap-y-5 mt-16">
              <h1 className="text-4xl font-bold text-gray-400">02</h1>
              <p className="text-xl tracking-wider">Daha Fazla Kazan</p>
            </div>
            <div>
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/iconarea2.png"
                alt=""
              />
            </div>
            <div className="bg-[#98A726] w-[80%] absolute bottom-0 py-[2px] "></div>
          </div>
          <div className="mt-2 text-xs text-center">
            <h1>Her büfe ve bilet alışverişinde %3 CGV Para kazan!</h1>
          </div>
        </div>
        {/* --------section 3-------- */}
        <div className="sm:mt-96 mt-16 mb-10 w-full flex flex-col items-center gap-y-2">
          <div className="bg-gradient-to-t from-stone-900 via-stone-800 to-neutral-500 relative rounded-lg w-[289px] h-[229px] flex items-start justify-center p-3">
            <div className="flex flex-col gap-y-5 mt-16">
              <h1 className="text-4xl font-bold text-gray-400">03</h1>
              <p className="text-xl tracking-wider">Daha Fazla Harca</p>
            </div>
            <div>
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/iconarea3.png"
                alt=""
              />
            </div>
            <div className="bg-[#98A726] w-[80%] absolute bottom-0 py-[2px] "></div>
          </div>
          <div className="mt-2 text-xs text-center">
            <h1>CGV Para’larını büfede ve gişede istediğin zaman harca.</h1>
          </div>
        </div>

        {/* --------section 4-------- */}
        <div className="sm:mt-96 mt-16 mb-10 w-full flex flex-col items-center gap-y-2">
          <div className="bg-gradient-to-t from-stone-900 via-stone-800 to-neutral-500 relative rounded-lg w-[289px] h-[229px] flex items-start justify-center p-3">
            <div className="flex flex-col gap-y-5 mt-16">
              <h1 className="text-4xl font-bold text-gray-400">04</h1>
              <p className="text-xl tracking-wider">Takipte Kal</p>
            </div>
            <div>
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/iconarea4.png"
                alt=""
              />
            </div>
            <div className="bg-[#98A726] w-[80%] absolute bottom-0 py-[2px] "></div>
          </div>
          <div className="mt-2 text-xs text-center">
            <h1>
              CGV Cinema Club avantajlarını kaçırmamak için takipte kal ve
              iletişim bilgilerini doldurmayı unutma.
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full px-10 my-14">
        <h1 className="sm:text-4xl text-2xl text-start font-bold tracking-wider">
          Üyelik Fırsatları
        </h1>
        <ul className="my-10">
          <UyelikFırsat/>
        </ul>
      </div>

      <div className="w-full px-10 my-14">
        <h1 className="sm:text-4xl text-2xl text-start font-bold tracking-wider">
        AcaVIP Üyelere Özel Fırsatlar
        </h1>
        <ul className="my-10">
          <AcaVipUye/>
        </ul>
      </div>


      <div>
         <Collapese/>
      </div>

       <div className="w-full">
       <Footer/>
       </div>
    </div>
  );
};

export default CinemaClub;
