import React from "react";
import {AiFillHeart} from 'react-icons/ai'
import {BiSolidNavigation} from 'react-icons/bi'
import Footer from "../components/Footer";
const CgvArthouse = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1 flex flex-col items-center justify-start">
      <div className="w-full h-[400px] relative">
        <img
          src="https://www.paribucineverse.com/assets/img/page-cgv-art-house/banner.png"
          alt=""
          className="brightness-90"
        />
        <div className="absolute  -bottom-72 left-0 w-full h-[3rem] bg-black blur-lg"></div>
      </div>
      <div className="text-white mt-80 w-[75%]">
        <h1 className="font-bold text-3xl tracking-wider">CGV Arthouse</h1>
        <p className="mt-5 leading-loose">
          CGV Arthouse, sinemayı mutluluk olarak gören insanların projesidir.
          CGV Arthouse salonları, CGV Mars Cinema Group’un heyecan ve mutluluk
          dolu, hiç anlatılmamış özel hikayeleri, seyirciyle buluşturduğu
          yerdir. CGV Arthouse salonlarımızda, sinemadan, edebiyattan ve
          sanattan hoşlanan; hayattan ilham alan insanları bir araya getirmeyi
          ve onlarla diğer sinema salonlarında göremeyecekleri filmleri,
          Türkiye’nin en iyi sinema salonlarında izletme heyecanımızı paylaşmak
          istiyoruz. Misafirlerimize tüm gün ve seanslarda 65 TL ile 70 TL
          arasında değişen bilet fiyatları ile, hem ulusal hem de uluslar arası
          festivallerde boy göstermiş, ödüller toplamış, kendinden söz ettirmiş
          filmlerden oluşan çok özel bir yayın akışı sunuyoruz. Yakın bir
          gelecekte ise daha çok şehir ve daha çok sinemada olmayı hedefliyoruz.
          CGV Arthouse salonlarında misafirlerimizle, yazar, yönetmen ve
          oyuncuları bir araya getirerek; sohbet ve söyleşiler düzenliyoruz.
          Vizyon takvimi yalnızca bağımsız filmlere ve sanat filmlerine
          ayrılmış, sinemanın en sanat halini keşfetmek için CGV Arthouse
          salonlarımıza gelin ve bu muhteşem sanat deneyimini siz de yaşayın.
        </p>
      </div>
      <div className="my-16 flex flex-col items-start w-[90%]">
        <h1 className="font-bold tracking-wider text-4xl">
          CGV Arthouse Filmleri
        </h1>
        <ul className="my-10 flex items-center justify-between w-full">
          <li className="border w-[310px] h-[410px] rounded-xl flex group flex-col items-center gap-y-2 relative cursor-pointer">
            <img
              src="https://media.paribucineverse.com/260//files/movie_posters/HO00006003_638291657108878816_kar-ve-ayi.png"
              alt=""
              className="w-full rounded-xl h-full object-cover"
            />
            <button className="border-4 border-double border-white py-2 px-14 absolute bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10   rounded-xl font-bold">
              İncele
            </button>
            <div className="w-full h-full bg-gradient-to-t from-[#98a726] absolute top-0 left-0 rounded-xl opacity-0 group-hover:opacity-100 bg-opacity-40 transition-all duration-500"></div>
            <span className="text-2xl font-bold tracking-wider">
             Kar ve Ayı
            </span>
          </li>
          <li className="border w-[310px] h-[410px] rounded-xl flex group flex-col items-center gap-y-2 relative cursor-pointer">
            <img
              src="https://media.paribucineverse.com/260//files/movie_posters/HO00006014_638297894044788301_guvenli-bir-yer.png"
              alt=""
              className="w-full rounded-xl h-full object-cover"
            />
            <button className="border-4 border-double border-white py-2 px-14 absolute bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10   rounded-xl font-bold">
              İncele
            </button>
            <div className="w-full h-full bg-gradient-to-t from-[#98a726] absolute top-0 left-0 rounded-xl opacity-0 group-hover:opacity-100 bg-opacity-40 transition-all duration-500"></div>
            <span className="text-2xl font-bold tracking-wider">
            Güvenli Bir Yer
            </span>
          </li>
          <li className="border w-[310px] h-[410px] rounded-xl flex group flex-col items-center gap-y-2 relative cursor-pointer">
            <img
              src="https://media.paribucineverse.com/260//files/movie_posters/HO00006015_638297894044788301_tavuri.png"
              alt=""
              className="w-full rounded-xl h-full object-cover"
            />
            <button className="border-4 border-double border-white py-2 px-14 absolute bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10   rounded-xl font-bold">
              İncele
            </button>
            <div className="w-full h-full bg-gradient-to-t from-[#98a726] absolute top-0 left-0 rounded-xl opacity-0 group-hover:opacity-100 bg-opacity-40 transition-all duration-500"></div>
            <span className="text-2xl font-bold tracking-wider">
              Tavuri
            </span>
          </li>
        </ul>
      </div>
      <div className="my-16 flex flex-col items-start w-[90%]">
      <h1 className="font-bold tracking-wider text-4xl">
          CGV Arthouse Filmleri
        </h1>
        <ul className="my-10 grid grid-cols-3 gap-x-7 gap-y-10">
        <li
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">Paribu Cineverse A Plus</span>
      <span className="text-black font-thin text-sm">Ataköy A Plus, Adnan Kahveci Bulvarı 6.Kısım, Ataköy - İstanbul</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
        <span  className="text-white bg-[#98A726] p-2 rounded-2xl"> <AiFillHeart size={20}/> </span>
        <span className="text-white bg-gray-600 p-2 rounded-2xl"> <BiSolidNavigation size={20}/> </span>
      </div>

      {/* Ekstra resimlerin listesi */}
      <div className="flex gap-2">
            <img
              src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/saloon-item/goldclass.svg"
              alt=""
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
      </div>
    </li>

    <li
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">Paribu Cineverse Bursa Podyumpark</span>
      <span className="text-black font-thin text-sm">Cumhuriyet Mah.Nilüfer Hatun Cad.No:114</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
        <span  className="text-white bg-[#98A726] p-2 rounded-2xl"> <AiFillHeart size={20}/> </span>
        <span className="text-white bg-gray-600 p-2 rounded-2xl"> <BiSolidNavigation size={20}/> </span>
      </div>

      {/* Ekstra resimlerin listesi */}
      <div className="flex gap-2">
            <img
              src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/saloon-item/goldclass.svg"
              alt=""
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
      </div>
    </li>

    <li
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">Paribu Cineverse Marmara Forum
</span>
      <span className="text-black font-thin text-sm">D100 Yan Yol Marmara Forum Alışveriş Merkezi S Blok NO: 207 Osmaniye Bakırköy/İstanbul</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
        <span  className="text-white bg-[#98A726] p-2 rounded-2xl"> <AiFillHeart size={20}/> </span>
        <span className="text-white bg-gray-600 p-2 rounded-2xl"> <BiSolidNavigation size={20}/> </span>
      </div>

      {/* Ekstra resimlerin listesi */}
      <div className="flex gap-2">
            <img
              src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/saloon-item/4dx.svg"
              alt=""
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
      </div>
    </li>

    <li
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">Paribu Cineverse Panora</span>
      <span className="text-black font-thin text-sm">Panora AVM Turan Güneş Bulvarı No: 182/212 Çankaya</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
        <span  className="text-white bg-[#98A726] p-2 rounded-2xl"> <AiFillHeart size={20}/> </span>
        <span className="text-white bg-gray-600 p-2 rounded-2xl"> <BiSolidNavigation size={20}/> </span>
      </div>

      {/* Ekstra resimlerin listesi */}
      <div className="flex gap-2">
            <img
              src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/saloon-item/goldclass.svg"
              alt=""
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
             <img
              src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/saloon-item/4dx.svg"
              alt=""
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
      </div>
    </li>

    <li
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">Paribu Cineverse Piazza Samsun</span>
      <span className="text-black font-thin text-sm">Çarşamba Cad. No: 52 Eski Otogar Mevkii Sanayi Sitesi Yanı / Samsun</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
        <span  className="text-white bg-[#98A726] p-2 rounded-2xl"> <AiFillHeart size={20}/> </span>
        <span className="text-white bg-gray-600 p-2 rounded-2xl"> <BiSolidNavigation size={20}/> </span>
      </div>
    </li>
        </ul>
      </div>
        <div className="w-full">
        <Footer />
        </div>
    </div>
  );
};

export default CgvArthouse;
