import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function SampleNextArrow({ onClick }) {
  return (
    <div>
      <FaRegArrowAltCircleRight
        className="sm:text-5xl text-4xl cursor-pointer font-bold sm:text-white text-gray-500 absolute sm:top-[40%] top-[107%] sm:-right-10 right-0 transform -translate-y-1/2 z-40"
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div>
      <FaRegArrowAltCircleLeft
         className="sm:text-5xl text-4xl cursor-pointer font-bold sm:text-white text-gray-500 absolute sm:top-[40%] top-[107%] sm:-left-10 left-0 transform -translate-y-1/2 z-40"
         onClick={onClick}
      />
    </div>
  );
}

const Campany = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewSlide, setPreviewSlide] = useState(currentSlide);

  const movies = [
    {
      img: "/images/campany1.jpeg",
    },
    {
      img: "/images/campany2.jpeg",
    },
    {
      img: "/images/campany3.jpeg",
    },
    {
      img: "/images/campany4.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : true,
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
    <div className="w-full sm:h-screen h-full sm:bg-[#262626] bg-[#121212] text-white flex items-start justify-center sm:p-24 p-2">
      <div className="w-[95%] h-[40rem] p-1">
        <div className="flex items-center justify-between">
          <h1 className="sm:text-4xl text-2xl font-bold">Kampanyalar</h1>
          <Link className="underline sm:text-2xl text-lg font-bold" to="/kampanyalar">
            TÜMÜ
          </Link>
        </div>
        <ul className="mt-10  w-full h-[450px]">
          <Slider  {...settings}>
            {movies.map((movie, index) => (
              <li key={index} className=" w-full h-[28rem]">
                <img
                    className="w-full h-full object-conver"
                    src={movie.img}
                    alt=""
                    />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Campany;
