import React, { useState, useEffect, useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Modal } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const VizyonPageComp = ({ movies, setMovies}) => {
  
  // Video modalı için state tanımla
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null); // videoRef'i burada tanımla

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/moviesData.json");
        const data = await res.data;
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
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
    <div>
      <ul className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-x-3 sm:gap-y-0 gap-y-10 py-20">
        {movies.map((movie, index) => (
          <li
            key={index}
            className="sm:w-[250px] w-[170px] relative  cursor-pointer sm:h-[480px] h-[390px] flex flex-col group gap-y-1 items-center  justify-between shadow-md shadow-red-400 sm:p-5 p-0"
          >
            <div className="w-full h-[20rem] filter relative  ">
              <img
                className="h-full w-full group-hover:sepia"
                src={movie.img}
                alt=""
              />
              <div
                className="absolute bottom-0 flex flex-col items-center justify-center gap-y-3 w-full z-30 opacity-0 hover:opacity-100 transition-all duration-500"
             
              >
                <span    onClick={() => showModal(movie.videoUrl)}>
                  {" "}
                  <BsFillPlayCircleFill size={50} />{" "}
                </span>
                <Link to={`/ticket/${movie.title.replace(/ /g, "-")}`} className="bg-[#98A726] text-white text-center py-2 w-full font-bold">
                  Hemen Biletini Al
                </Link>
                <Link
                  to={`/movie/${movie.title.replace(/ /g, "-")}`}
                  className="border py-2 text-center bg-gray-300 text-gray-700 font-bold w-full"
                >
                  İncele
                </Link>
              </div>
              <div className="absolute top-4 left-1 flex flex-col opacity-0 w-full group-hover:opacity-100 transition-all duration-500">
                {movie.extra && (
                  <div className="flex font-bold items-start justify-around w-full flex-col gap-y-2">
                    <img
                      className="w-10 h-10 object-contain rounded-md bg-gray-900 px-2"
                      src={movie.extra.img1}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 object-contain rounded-md bg-gray-900  px-2 "
                      src={movie.extra.img2}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 object-contain rounded-md bg-gray-900  px-2 "
                      src={movie.extra.img3}
                      alt=""
                    />
                  </div>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute -top-3 flex flex-col gap-y-2 right-2">
                  <img
                    className="bg-gray-800 p-2 rounded-xl"
                    src={movie.starImg}
                    alt=""
                  />
                  <span className="bg-gray-800 px-3 py-1 rounded-lg">
                    {movie.starTitle}
                  </span>
                </div>
              </div>
            </div>
            <h1 className="font-bold text-lg mt-2 text-center">
              {movie.title}
            </h1>
            <div className="flex items-center justify-between  w-full mb-10">
              <span className="font-bold text-lg text-gray-500">
                {movie.time}
              </span>
              <span className="font-bold text-lg text-gray-500">
                {movie.action}
              </span>
            </div>
          </li>
        ))}
      </ul>
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

export default VizyonPageComp;
