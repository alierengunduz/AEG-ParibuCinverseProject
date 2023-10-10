import React,{useState,useEffect, useRef} from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Modal } from "antd";
import axios from "axios";
import {Link} from "react-router-dom";
const YakindaPageComp = () => {
 
    const [movies,setMovies] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null); // videoRef'i burada tanımla

    useEffect(() => {
         const getMovies = async () => {
          try {
            const res = await axios.get("/YakindaData.json");
            const data = await res.data;
            setMovies(data); 
          } catch (error) {
            console.log(error);
          }
         }
          getMovies();
    } ,[])

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
    <>
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
                  <div onClick={() => showModal(movie.videoUrl)} className="absolute bottom-0 flex flex-col items-center justify-center gap-y-3 w-full z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span>
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
                <h1 className="font-bold text-lg   text-center ">
                  {movie.title}
                </h1>
                <p className="text-center bg-gray-900 py-1 w-[80%]">{movie.date}</p>
              </li>
            ))}

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
    </>
  )
}

export default YakindaPageComp