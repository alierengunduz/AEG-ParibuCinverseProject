import React,{useState} from 'react'
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";



function SampleNextArrow({ onClick }) {
    return (
      <div>
        <FaRegArrowAltCircleRight
          className="sm:text-5xl text-4xl cursor-pointer font-bold sm:text-white text-gray-400 absolute top-[30%] sm:right-0
          -right-7 transform -translate-y-1/2 z-40"
          onClick={onClick}
        />
      </div>
    );
  }
  
  function SamplePrevArrow({ onClick }) {
    return (
      <div>
        <FaRegArrowAltCircleLeft
          className="sm:text-5xl text-4xl cursor-pointer font-bold sm:text-white text-gray-400 absolute top-[30%] sm:left-0 -left-7 transform -translate-y-1/2 z-40"
          onClick={onClick}
        />
      </div>
    );
  }
  

const UyelikFırsat = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
  const [previewSlide, setPreviewSlide] = useState(currentSlide);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        onClick={() => {
          setCurrentSlide(currentSlide + 1);
          setPreviewSlide(currentSlide + 1);
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={() => {
          setCurrentSlide(currentSlide - 1);
          setPreviewSlide(currentSlide - 1);
        }}
      />
    ),
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setPreviewSlide(next);
    },
    responsive: [
      {
        breakpoint: 768, // Mobil ekran boyutu için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet ekran boyutu için
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // Diğer ekran boyutlarına göre istediğiniz ayarları ekleyebilirsiniz.
    ],
  };



  return (
    <Slider {...settings}>
          {/* -----section---1----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/member/04_cgv_cinema_club_menu.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                Doğum gününde tüm üyelere orta mısır hediye!
              </h1>
              <p className="text-gray-500">
                CGV Cinema Club üyelerimiz kendilerini daha özel hissetsin diye
                doğum günlerinde patlamış mısır hediye!
              </p>
            </div>
          </li>
          {/* -----section---2----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/member/05_cgv_cinema_club_hizmet_bedeli_yok.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                Hizmet bedeli ödemeye son!
              </h1>
              <p className="text-gray-500">
                CGV Cinema Club üyelerimiz online bilet alımlarında herhangi bir hizmet bedeli ödemiyor.
              </p>
            </div>
          </li>
          {/* -----section---3----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/member/01_cgv_cinema_club_para.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                Gişede ve büfede toplam harcamana %3 CGV Para!
              </h1>
              <p className="text-gray-500">
                Yenilenen CGV Cinema Club'a üye ol, gişe ve büfede harcadıkça kazan, kazandıkça harca!
              </p>
            </div>
          </li>
          {/* -----section---4----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/member/02_cgv_cinema_club_gozluk.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                 CGV Cinema Club üyelerine 3D gözlükler 1TL indirimli!
              </h1>
              <p className="text-gray-500">
                CGV Cinema Club üyeleri, 3D filmlerde gözlükleri indirimli alırlar,keyiflerine bakarlar.
              </p>
            </div>
          </li>
          {/* -----section---5----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/member/03_cgv_cinema_club_duyuru.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                 Sevdiğin markalardan sevineceğin haberler almak için takipte kal!
              </h1>
              <p className="text-gray-500">
                CGV Cinema Club avantajları için takipte kal ve iletişim bilgilerini  doldurmayı unutma.
              </p>
            </div>
          </li>
          </Slider>
  )
}

export default UyelikFırsat