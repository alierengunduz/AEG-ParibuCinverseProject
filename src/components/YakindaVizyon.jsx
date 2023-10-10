import React,{useState,useEffect,useRef} from "react";
import Slider from "react-slick";
import { BsFillPlayCircleFill } from "react-icons/bs";
import axios from 'axios'
import { Modal } from "antd";
import {Link} from 'react-router-dom'
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



const YakindaVizyon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewSlide, setPreviewSlide] = useState(currentSlide);
  const [movies,setMovies] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null); // videoRef'i burada tanımla
  
   useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get('/YakindaData.json')
        const data = await res.data
        setMovies(data)
      } catch (error) {
        console.log(error);
      }
    }
    getMovies()
   },[]) 


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="w-full h-screen sm:bg-[#262626] bg-[#121212] text-white flex items-start justify-center sm:p-24 p-2">
      <div className="w-[95%] h-[40rem] p-1">
        <div className="flex items-center justify-between">
          <h1 className="sm:text-4xl text-lg font-bold">Yakında Vizyona Girecekler</h1>
          <Link className="underline sm:text-2xl text-base font-bold" to="/yakinda">
            TÜMÜ
          </Link>
        </div>
        <ul className="mt-10 p-1 w-full h-[550px]">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <li
                key={index}
                className="w-[250px] relative cursor-pointer h-[480px] flex flex-col group gap-y-10 items-center justify-between shadow-md shadow-red-400 p-5"
              >
                <div className="w-full h-[20rem] filter relative  ">
                  <img
                    className="h-full w-full group-hover:sepia"
                    src={movie.img}
                    alt=""
                  />
                  <div className="absolute bottom-0 flex flex-col items-center justify-center gap-y-3 w-full z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span onClick={() => showModal(movie.videoUrl)}>
                      {" "}
                      <BsFillPlayCircleFill size={50} />{" "}
                    </span>
                    <Link
                  to={`/nextmovie/${movie.title.replace(/ /g, "-")}`}
                  className="border py-2 text-center bg-gray-300 text-gray-700 font-bold w-full"
                >
                  İncele
                </Link>
                  </div>
                </div>
                <h1 className="font-bold text-lg mt-2 text-center">
                  {movie.title}
                </h1>
                <p className="text-center bg-gray-900 py-1 absolute bottom-5 w-[80%]">{movie.date}</p>
              </li>
            ))}
          </Slider>
        </ul>
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

export default YakindaVizyon;
