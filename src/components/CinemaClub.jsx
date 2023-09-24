import React from "react";

const CinemaClub = () => {

  const cinemaClub = [
     {
         id: 1,
         img: (
            <a href="">
                <img
                src="https://www.paribucineverse.com/assets/img/icons/cinema_types/imax.svg"
                alt=""
                className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
                />
                <img
                src="https://www.paribucineverse.com/assets/img/icons/cinema_types/imax-w.svg"
                alt=""
                className="w-full h-full"
                />
            </a>
         )
     },
     {
        id: 2,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/goldclass.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/gold-class-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 3,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/4dx.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/4dx-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 4,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/screenx.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/screenx-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 5,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/Starium.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/starium-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 6,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/tempur.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/tempur-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 7,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/d-box.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/d-box-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 8,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/skybox.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/skybox-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 9,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/sky-auditorium.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/sky-auditorium-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 10,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/premium-cinema.svg"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/premium-cinema-w.svg"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
    {
        id: 11,
        img: (
           <a href="">
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/mpx.png"
               alt=""
               className="w-full h-full absolute top-0 hover:rounded-3xl hover:p-3 left-0 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
               />
               <img
               src="https://www.paribucineverse.com/assets/img/icons/cinema_types/mpx-w.png"
               alt=""
               className="w-full h-full"
               />
           </a>
        )
    },
  ]

  return (
    <div className="w-full min-h-screen text-white bg-[#222222] p-28 flex flex-col gap-y-10">
      <div className="w-full h-[350px] bg-[#FFFFFF] flex items-center justify-between p-3 rounded-3xl">
        <div className="w-[30%]">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/cgv_cinema_club/cgv_logo_2x.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-y-10 w-[40%]">
          <h1 className="text-slate-700">Bitmeyen fayda yapmışlar!</h1>
          <p className="text-black font-bold">
            Her harcamandan %3 CGV Para kazan ve hizmet bedeli ödeme. İndirimli
            3D <br /> gözlüklerin yanında, doğum günü sürprizleri! Herkesten
            önce filmlerin ön <br /> gösterimlerinden ve kampanyalardan sen
            haberdar ol!
          </p>
          <div className="flex items-center gap-x-5">
            <button className="text-black border border-gray-700 px-14 py-1 rounded-xl">
              Keşfet
            </button>
            <button className="text-white bg-[#95A724] px-14 py-1 rounded-xl">
              Üye Ol
            </button>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/cgv_cinema_club/avatar_coin_1x.png"
            className="object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[300px] p-1 flex flex-col gap-y-20">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wider">
            Ayrıcalıklı Salonlar
          </h1>
          <a className="underline text-xl font-bold tracking-wider" href="">
            Tümü
          </a>
        </div>
        <ul className="grid grid-cols-5 gap-y-10">
          {
                cinemaClub.map((item) => (
                    <li key={item.id} className="w-[200px] h-[70px] bg-[#2E2E2E] rounded-3xl  relative group p-3">
                        {item.img}
                    </li>
                ))
          }
        </ul>
      </div>
      <div className="mt-36  rounded-3xl h-[275px] bg-[#2E2E2E] flex items-center justify-between px-10 py-1">
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
      </div>
    </div>
  );
};

export default CinemaClub;
