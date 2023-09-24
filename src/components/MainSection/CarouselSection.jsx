import React, { useEffect, useState, useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function SampleNextArrow({ onClick }) {
  return (
    <div>
      <FaRegArrowAltCircleRight
        className="sm:text-5xl text-4xl cursor-pointer font-bold text-white absolute sm:top-[78%] top-[80%] sm:right-[11%] right-[3%] transform -translate-y-1/2 z-40"
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div>
      <FaRegArrowAltCircleLeft
        className="sm:text-5xl text-4xl cursor-pointer font-bold text-white absolute sm:top-[78%] top-[80%] right-[16%] transform -translate-y-1/2 z-40"
        onClick={onClick}
      />
    </div>
  );
}

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewSlide, setPreviewSlide] = useState(currentSlide);
  const [carouselData, setCarouselData] = useState([]);

  // Video modalı için state tanımla
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null); // videoRef'i burada tanımla

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/CarouselData.json");
        const data = res.data;
        setCarouselData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Modalı aç videoUrl'i setle
  const showModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // Videonun durmasını sağla
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={item.id} className="w-full h-full flex flex-col  relative">
            <img
              src={item.image}
              alt=""
              className="w-full h-screen relative brightness-90"
            />
            <div className="absolute top-32  md:ml-10 ml-0 h-[550px] w-[630px]  flex flex-col  justify-between p-3">
              <h1 className="text-white xl:text-5xl lg:text-3xl md:text-2xl text-lg sm:w-full w-[300px] text-center tracking-wider font-bold leading-snug">
                {item.name}
              </h1>
              <p className="text-gray-200 lg:text-xl md:text-base sm:text-sm  md:w-full w-[350px]">
                {item.subtitle}
              </p>
              {/* -----total-------- */}
              <div className="flex items-center mr-auto justify-around gap-x-10 p-1">
                {/* ------section--1------- */}
                <div className="flex items-center gap-x-4">
                  {item.details &&
                    Object.values(item.details).map((detail, index) => (
                      <img
                        key={index}
                        src={detail}
                        alt=""
                        width={20} // İstediğiniz boyutları ayarlayabilirsiniz
                        height={20}
                      />
                    ))}
                </div>
                {/* ------section--2------- */}
                <div>
                  {item.zaman && (
                    <div className="flex items-center gap-x-2 text-white text-sm">
                      <img src={item.zaman.timeImg} alt="" />
                      <p className="text-white">{item.zaman.times}</p>
                    </div>
                  )}
                </div>

                {/* ------section--3------- */}
                <div>
                  {item.star && (
                    <div className="flex items-center gap-x-2 text-white text-xl">
                      <img src={item.star.stars} alt="" className="w-4 h-4" />
                      <p className="text-white">{item.star.starCount}</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-x-4">
                  {item.ex &&
                    Object.values(item.ex).map((ex, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-x-2 text-white text-xl bg-gray-500 h-[2rem] px-[2rem] rounded-lg"
                      >
                        <img src={ex} alt="" className="sm:w-14 w-10
                        " />
                      </div>
                    ))}
                </div>
                <div
                  onClick={() => showModal(item.videoUrl)}
                  className="absolute top-[50%] cursor-pointer left-[70%] text-gray-300 bg-gradient-to-br from-gray-500   py-3 px-10 hover:text-gray-800 transition-all duration-100 rounded-3xl hover:bg-gray-200 group"
                >
                  <span className=" transition-all duration-100 ">
                    <BsFillPlayCircleFill size={60} />
                  </span>
                </div>
              </div>
              <p className="text-gray-200 sm:text-xl text-base font-bold">
                {item.campaignDate}
              </p>
              <div className="flex items-center gap-x-5">
                <Link
                  to={`/carousel/${item.title.replace(/ /g, "-")}`}
                  className="border-2 border-double text-white w-[12rem] rounded-xl font-bold tracking-wider py-2 flex items-center justify-center"
                >
                  {item.examine}
                </Link>

                {item.btn ? (
                  <Link
                    className="bg-[#808c19] text-white border-white border-2 border-double w-[12rem] rounded-xl font-bold tracking-wider py-2 flex items-center justify-center"
                    to=""
                  >
                    {item.btn}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="h-16 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full z-10 animate-pulse">
        <div className="absolute bottom-0 left-0 text-white ml-4 mb-4">
          {currentSlide + 1} / {carouselData.length}
        </div>
      </div>
      <div className="w-full h-16 absolute bottom-0 left-0 flex items-center justify-center">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`w-8 h-8 mx-2 rounded-full cursor-pointer ${
              index === previewSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {videoUrl && (
          <iframe
            ref={videoRef} // videoRef'i iframe'e ekleyin
            width="100%"
            height="500"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default CarouselPage;
