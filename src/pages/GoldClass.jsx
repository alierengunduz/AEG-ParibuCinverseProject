import React from "react";
import Footer from "../components/Footer";
import FormCompo from "../components/FormCompo";
const GoldClass = () => {

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1">
      <div className="w-full sm:h-[400px] h-[200px]">
        <img
        className="w-full h-full object-cover"
          src="https://www.paribucineverse.com/assets/modules/page-gold-class-lounge/img/gold-class-salon-sizin-hero-banner.jpg"
          alt=""
        />
      </div>
      <div className=" sm:w-[55%] w-[95%] m-auto">
        <div className="text-white  py-2  flex items-center gap-x-1">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
            alt=""
            className="w-4 h-4"
          />
          <img
            src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
            alt=""
            className="w-4 h-4"
          />
          <span className="text-gray-400 font-bold text-sm">
            Gold Class Salon Sizin
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-y-10">
          <h1 className="sm:text-2xl text-lg tracking-wide font-bold">
            Konforda sınırı bir üst seviyeye taşıyan rahat ve ferah Gold Class
            salonlarımızda dilediğiniz etkinliği yapabilirsiniz
          </h1>
          <p className="sm:text-lg text-sm">
            Geniş ve yatabilen koltuklarıyla bambaşka bir konfor sunan Gold
            Class salonlarımız film keyfinin en rahat hali için sizleri
            bekliyor. Kendine ait ayrı bir fuaye alanı olan Gold Class
            salonlarımızdaki rahat ve konforlu koltuklarımızda dileyen
            misafirlerimiz için telefon şarj ünitesi* bulunmakta!* Şarj ünitesi
            ve ayrı fuaye alanı tüm Gold Class salonlarımızda mevcut değildir.
          </p>
        </div>
        {/* -----------form---------------- */}
         <FormCompo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GoldClass;
