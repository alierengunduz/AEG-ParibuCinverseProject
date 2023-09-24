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
        className="text-5xl cursor-pointer font-bold text-white absolute top-[50%] right-0 transform -translate-y-1/2 z-40"
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div>
      <FaRegArrowAltCircleLeft
        className="text-5xl cursor-pointer font-bold text-white absolute top-[50%] left-0 transform -translate-y-1/2 z-40"
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
  };

  return (
    <div className="w-full h-screen bg-[#262626] text-white flex items-start justify-center p-24">
      <div className="w-[95%] h-[40rem] p-1">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Kampanyalar</h1>
          <Link className="underline text-2xl font-bold" to="/kampanyalar">
            TÜMÜ
          </Link>
        </div>
        <ul className="mt-10  w-full h-[450px]">
          <Slider  {...settings}>
            {movies.map((movie, index) => (
              <li key={index} className=" w-full h-[28rem]">
                <img
                    className="w-full h-full object-cover"
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
