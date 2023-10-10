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
          className="sm:text-5xl text-4xl cursor-pointer font-bold sm:text-white text-gray-400 absolute top-[30%] sm:right-0 -right-7 transform -translate-y-1/2 z-40"
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
  

const AcaVipUye = () => {

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
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/acavip/08_cine_photo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                Cine Foto Hatıra Fotoğrafınız Bizden
              </h1>
              <p className="text-gray-500">
                AcaVIP üyelerimize lokasyonlarımızın fuaye alanında bulunan Cine Foto'larda hatıra fotoğrafı ayrıcalığı
              </p>
            </div>
          </li>
          {/* -----section---2----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/acavip/09_ozel_gun_surpriz.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                Özel günlerde sürpriz hediyeler!
              </h1>
              <p className="text-gray-500">
                Özel günlerde de acaVıp üyelerimizin yanındayız. Sürpriz hediyeler ve fırsatlar için  hazır olun!
              </p>
            </div>
          </li>
          {/* -----section---3----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/acavip/01_30_cgv_para_hosgeldin.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                30 CGV Para hoş geldin Hediyesi!
              </h1>
              <p className="text-gray-500">
                Paribu cineverse gişe ve büfelerde kullanabileceğiniz 30 CGV para hediye!
              </p>
            </div>
          </li>
          {/* -----section---4----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/acavip/03_large_popcorn_menu.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                 Tekli büyük menü'd'e 25 TL indirim!
              </h1>
              <p className="text-gray-500">
                AcaVIP üyelerimize tek içecekli büyük mısır menülerinde %25 indirim ayrıcalığı
              </p>
            </div>
          </li>
          {/* -----section---5----- */}
          <li className="w-[300px] h-[411px] px-3">
            <div className="w-full h-[246px] rounded-lg">
              <img
                src="https://www.paribucineverse.com/assets/img/page-cinemaclub/acavip/04_popcorn_orta_hediye.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[115px] gap-y-2 flex flex-col items-start  justify-between p-2">
              <h1 className="text-white">
                 Ücretsiz orta mısır hediyesi
              </h1>
              <p className="text-gray-500">
                AcaVIP üyelerimize ücretsiz orta mısır ayrıcalığı
              </p>
            </div>
          </li>
          </Slider>
  )
}

export default AcaVipUye