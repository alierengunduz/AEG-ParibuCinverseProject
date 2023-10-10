import React from "react";
import Collapese from "../components/Collapese";
import Footer from "../components/Footer";
const MoviePass = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1 flex flex-col items-center justify-start">
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img
          src="https://www.paribucineverse.com/assets/img/page-moviepass/moviepass-hero.png"
          alt=""
          className="brightness-90 w-full h-full object-cover"
        />
        <div className="absolute  -bottom-72 left-0 w-full h-[3rem] bg-black blur-lg"></div>
        <div className="text-white flex flex-col gap-y-8 absolute -bottom-80 items-center justify-center sm:px-20 px-2">
          <h1 className="font-bold sm:text-4xl text-2xl tracking-wider">
            CGV MoviePass Paketleri
          </h1>
          <p className="md:text-lg sm:text-base text-sm tracking-wide text-center leading-loose">
            Sinemada film izlemenin EN kolay, EN hızlı ve EN lezzetli yolu CGV
            MoviePass’te! Haydi hiç vakit kaybetmeden, paketini seç sinemaya
            gel! CGV Para’larınla hem mısır hem de sürpriz hediyeler senin
            olsun.
          </p>
        </div>
      </div>

      <ul className="mt-96 w-[90%] flex sm:flex-row flex-col items-center justify-between p-1 my-10">
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
          <div>
            <img
              src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">100 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>100 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>Orta Boy Mısır</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-4 mt-10">
            <div>
              <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">
                Satın Al
              </button>
            </div>
            <div>
              <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
          </div>
        </li>
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
          <div className="relative">
            <img
              src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png"
              alt=""
            />
            <span className="bg-red-600 px-4 py-2 rounded-2xl absolute top-32 -left-20">
              POPÜLER
            </span>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">200 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>200 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>Büyük Boy Mısır</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>Sürpriz Hediye</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-4 ">
            <div>
              <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">
                Satın Al
              </button>
            </div>
            <div>
              <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
          </div>
        </li>
        <li className="w-[400px] h-[600px] cursor-pointer bg-black  transition-all duration-300 rounded-t-full hover:bg-[#3D4042] hover:scale-105 flex flex-col gap-y-10 items-center justify-start">
          <div>
            <img
              src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/100.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="border-b border-gray-300 text-center pb-5">
              <span className="text-4xl font-bold tracking-wider">300 TL</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>300 CGV Para</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>Kova Boy Mısır</span>
              </div>
              <div className="flex items-center gap-x-3 text-lg">
                <img
                  src="https://www.paribucineverse.com/assets/img/icons/cgv_slider/checkmark.png"
                  alt=""
                />
                <span>Sürpriz Hediye</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-4 mt-10">
            <div>
              <button className="bg-[#98A726] py-2 rounded-2xl px-24 ">
                Satın Al
              </button>
            </div>
            <div>
              <button className="py-2 rounded-2xl px-20 ">Hediye Et</button>
            </div>
          </div>
        </li>
      </ul>

      {/* -------------second part---------------- */}
      <div className="text-white my-10">
        <h1 className="font-bold sm:text-3xl text-xl text-center my-14 tracking-wider">
          CGV MoviePass’i Nasıl Kullanırım?
        </h1>
           

        <div className="flex flex-col items-center justify-start w-full sm:px-20 px-2">

  <div className="flex sm:flex-row flex-col items-center gap-x-10  w-full sm:gap-y-0 gap-y-5 sm:my-0 my-5">
    <div className="sm:w-[50%] w-[95%] relative">
      <img
        src="https://www.paribucineverse.com/assets/img/page-moviepass/howto_1.jpg"
        alt=""
        className="rounded-xl"
      />
      <div class="absolute h-full w-px border border-green-500 border-dashed right-[-2px] top-0 transform -translate-x-1/2"></div>
      <div class="absolute h-5 w-5 bg-green-500 rounded-full -right-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div className="flex flex-col items-start gap-y-5 sm:w-[50%] w-[90%] sm:mt-0 mt-5">
      <h1 className="font-bold tracking-wide text-2xl">
        Kendine uygun CGV MoviePass paketini seç!
      </h1>
      <div className="flex flex-col gap-y-4 sm:text-base text-sm">
        <p>
          100 TL’lik CGV MoviePass paketi içerisinde 100 CGV Para ve orta boy
          mısır vardır.
        </p>
        <p>
          200 TL’lik CGV MoviePass paketi içerisinde 200 CGV Para, büyük boy
          mısır ve sürpriz hediye vardır.
        </p>
        <p>
          300 TL’lik CGV MoviePass paketi içerisinde 330 CGV Para, kova mısır
          ve sürpriz hediye vardır.
        </p>
      </div>
    </div>
  </div>



  <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-10 w-full sm:my-0 my-5">
    <div className="flex  flex-col items-start gap-y-5 sm:w-[50%] w-[95%]">
      <h1 className="font-bold tracking-wide text-2xl">
        CGV MoviePass paketlerini kullanmak için CGV Cinema Club üyesi olma
        koşulu aranmaktadır.
      </h1>
      <div className="flex flex-col gap-y-4">
        <p>
          CGV MoviePass paketindeki CGV Para barkodu CGV Cinema Club üyeliğine
          yüklendikten itibaren 6 ay içerisinde kullanılması gerekmektedir.
        </p>
        <p>
          Satın aldıktan sonra 30 gün içerisinde barkodlar kazınmamış,
          kullanılmamış ve hesaba yüklenmemişse iade edilebilir.
        </p>
      </div>
    </div>
    <div className="sm:w-[50%] w-[95%] relative">
      <img
        src="https://www.paribucineverse.com/assets/img/page-moviepass/howto_2.jpg"
        alt=""
        className="rounded-xl"
      />
      <div class="absolute h-full w-px border border-green-500 border-dashed  -left-10 top-0 transform -translate-x-1/2"></div>
      <div class="absolute h-5 w-5 bg-green-500 rounded-full -left-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>




  <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-10 w-full sm:my-0 my-5">
    <div className="sm:w-[50%] w-[95%] relative">
      <img
        src="https://www.paribucineverse.com/assets/img/page-moviepass/howto_1.jpg"
        alt=""
        className="rounded-xl"
      />
      <div class="absolute h-full w-px border border-green-500 border-dashed right-[-2px] top-0 transform -translate-x-1/2"></div>
      <div class="absolute h-5 w-5 bg-green-500 rounded-full -right-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div className="flex flex-col items-start gap-y-5 sm:w-[50%] w-[95%]">
      <h1 className="font-bold tracking-wide text-2xl">
        Sana özel fırsatlarla, CGV Para’larını dilediğin gibi ister büfede ister
        gişede harcamaya başla!
      </h1>
    </div>
  </div>



  
   <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-10 w-full sm:my-0 my-5">
    <div className="flex flex-col items-start gap-y-5 sm:w-[50%] w-[95%]">
      <h1 className="font-bold tracking-wide text-2xl">
        CGV MoviePass paketlerini kullanmak için CGV Cinema Club üyesi olma
        koşulu aranmaktadır.
      </h1>
      <div className="flex flex-col gap-y-4">
        <p>
          CGV MoviePass paketindeki CGV Para barkodu CGV Cinema Club üyeliğine
          yüklendikten itibaren 6 ay içerisinde kullanılması gerekmektedir.
        </p>
        <p>
          Satın aldıktan sonra 30 gün içerisinde barkodlar kazınmamış,
          kullanılmamış ve hesaba yüklenmemişse iade edilebilir.
        </p>
      </div>
    </div>
    <div className="sm:w-[50%] w-[95%] relative">
      <img
        src="https://www.paribucineverse.com/assets/img/page-moviepass/howto_2.jpg"
        alt=""
        className="rounded-xl"
      />
      <div class="absolute h-full w-px border border-green-500 border-dashed -left-10 top-0 transform -translate-x-1/2"></div>
      <div class="absolute h-5 w-5 bg-green-500 rounded-full -left-10 top-1/2  transform -translate-x-1/2"></div>
    </div>
  </div> 


</div>
    <div>
      <Collapese />
    </div>
      </div>

      {/* <div className="my-10   w-[90%] rounded-3xl h-[275px] bg-[#2E2E2E] flex items-center justify-between px-10 py-1">
        <div className="flex flex-col items-center justify-around gap-y-10">
            <h1 className="text-3xl font-bold tracking-wider">Mobil Uygulamamızı <br /> Keşfedin!</h1>
            <div className="flex items-center gap-x-4">
                <img src="https://www.paribucineverse.com/assets/img/icons/store/google_play_2x.png" alt="" />
                <img src="https://www.paribucineverse.com/assets/img/icons/store/app_store_2x.png" alt="" />
            </div>
        </div>
        <div className="flex items-center gap-x-5 mb-6">
            <img src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_3x.png" alt="" />
            <img src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_avatar_3x.png" alt="" />
        </div>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePass;
