import React, { useState, useEffect } from "react";
import { Dropdown, Space } from "antd";
import { useParams, Link } from "react-router-dom";
import TarihveSeans from "../../components/TarihveSeans";
import axios from "axios";
import Lottie from "lottie-react";
import CinemaAnim from "../../assets/cinemaAnim.json";
import TimeAnim from "../../assets/timeAnim.json";
import ChooseCity from "../../components/ChooseCity";
import SearchCity from "../../components/SearchCity";
const TicketSlug = () => {
  const [ticketdata, setTicketdata] = useState({});
  const [movies, setMovies] = useState([]);
  const [mouseClick, setMouseClick] = useState(false);
  const [mouseClick2, setMouseClick2] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedCinemaId, setSelectedCinemaId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/paribu.json");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [setData]);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
    setMouseClick(true);
  };

  const handleCinemaClick = (movieId) => {
    setSelectedCinemaId(movieId);
    setMouseClick2(true);
  };

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

  const { TicketSlug } = useParams();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch("/moviesData.json"); // JSON dosyanızın yolu
        const data = await res.json();
        const movie = data.find((movie) => movie.title === TicketSlug);

        if (movie) {
          setTicketdata(movie);
        } else {
          console.error(`Movie with slug "${TicketSlug}" not found.`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [TicketSlug]);

  console.log(ticketdata);

  const items = [
    {
      key: "1",
      label: <button>Akıllı Sıralama</button>,
    },
    {
      key: "2",
      label: <button>Vizyon tarigine göre</button>,
    },
    {
      key: "3",
      label: <button>Puana göre</button>,
    },
  ];

  return (
    <div className="bg-[#181818] w-full min-h-screen flex items-start pt-28 justify-center text-white">
      <div className="flex flex-col gap-y-16 w-[85%]">
        {/* -------section----1-------- */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-3">
            <span className="border border-[#92A601] py-3 px-5 rounded-full shadow-md shadow-[#92A601]">
              1
            </span>
            <span className="text-2xl font-bold">Seans Seç</span>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="border border-[#92A601] py-3 px-5 rounded-full shadow-md shadow-[#92A601]">
              2
            </span>
            <span className="text-2xl font-bold">Bilet Tipi</span>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="border border-[#92A601] py-3 px-5 rounded-full shadow-md shadow-[#92A601]">
              3
            </span>
            <span className="text-2xl font-bold">Koltuk Seçimi</span>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="border border-[#92A601] py-3 px-5 rounded-full shadow-md shadow-[#92A601]">
              4
            </span>
            <span className="text-2xl font-bold">Ödeme</span>
          </div>
        </div>
        {/* -------section----2-------- */}
        <div className="flex items-center justify-between">
          <span>
            Aşağıda listelenen film, salon ve seans seçeneklerinden tercihini
            yaparak diğer adımlara geçebilirsin.
          </span>
          <button className="text-gray-500 bg-[#2A2A2A] py-3 px-8 rounded-3xl">
            Devam Et
          </button>
        </div>
        {/* -------section----3-------- */}
        <div className="flex items-center justify-between gap-x-8 py-20">
          {/* -------section 3--------in-------1--------kısmı */}
          <div className="w-[390px] h-[620px] bg-[#1E1E1E] rounded-2xl flex flex-col gap-y-6 p-4">
            <h1>Film Seçimi</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-xs text-gray-400">
                <span>Tümü</span>
                <span>Favoriler</span>
                <span>Ön Satış</span>
              </div>
              <div>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Space>
                    <img
                      src="https://www.paribucineverse.com/assets/img/icons/ticket_flow/sort-arrow.svg"
                      alt=""
                    />{" "}
                  </Space>
                </Dropdown>
              </div>
            </div>
            <ul className="flex flex-col gap-y-3 overflow-auto scroolGizle pr-9">
              {movies.map((movie, index) => (
                <li
                  onClick={() => handleMovieClick(movie.id)} // Tıklama durumunu güncelle
                  key={index}
                  className={`w-[342px] h-[165px] bg-white rounded-lg flex flex-col justify-between p-1 text-black ${
                    selectedMovieId === movie.id ? "selected-movie" : "" // Tıklanan filme göre arka plan rengini değiştir
                  }`}
                >
                  <div className="h-[70%] flex items-center gap-x-3">
                    <img
                      src={movie.img}
                      alt=""
                      className=" h-[100%] rounded-md"
                    />
                    <div className="flex flex-col text-black text-sm">
                      <span className="bg-[#95A724] text-white text-center text-xs py-1 rounded-3xl">
                        ÖN SATIŞTA
                      </span>
                      <span className="font-bold">{movie.name}</span>
                      <span>{movie.en}</span>
                      <span>
                        {movie.time} / {movie.action}
                      </span>
                      <div className="flex items-center gap-x-2">
                        <img
                          src="https://www.paribucineverse.com/assets/img/icons/ticket_flow/movie-star.svg"
                          alt=""
                        />
                        <span className="font-bold text-xl">
                          {" "}
                          {movie.starTitle}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  justify-start gap-x-10 text-black">
                    <div className="flex flex-col text-xs font-bold">
                      <span>Vizyon Tarihi</span>
                      <span>22.09.2023</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      {movie.extra && (
                        <div className="flex font-bold items-start justify-around w-full  gap-x-4">
                          <img
                            className="w-8 h-8 object-contain rounded-md bg-gray-900 px-2"
                            src={movie.extra.img1}
                            alt=""
                          />
                          <img
                            className="w-8 h-8 object-contain rounded-md bg-gray-900  px-2 "
                            src={movie.extra.img2}
                            alt=""
                          />
                          <img
                            className="w-8 h-8 object-contain rounded-md bg-gray-900  px-2 "
                            src={movie.extra.img3}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* -------section 3--------in-------2--------kısmı */}
          <div className="w-[470px] h-[620px] bg-[#1E1E1E] rounded-2xl flex flex-col gap-y-6 p-4">
            <h1>Sinema Seçimi</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 text-xs text-gray-400">
                <span>Tümü</span>
                <span>Favoriler</span>
                <span>Yakınımdakiler</span>
              </div>
              <div>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Space>
                    <img
                      src="https://www.paribucineverse.com/assets/img/icons/ticket_flow/sort-arrow.svg"
                      alt=""
                    />{" "}
                  </Space>
                </Dropdown>
              </div>
            </div>
            {/* ----------------search---------------- */}
            <div className="flex items-center gap-x-2">
              <div className="w-[45%]">
                <ChooseCity />
              </div>
              <div className="w-[45%]">
                <SearchCity />
              </div>
            </div>
            <ul className="flex flex-col gap-y-4 overflow-auto overflow-x-hidden w-full scrollGizle pr-9 text-black">
              {mouseClick ? (
                <>
                  {data.map((item, index) => {
                    return (
                      <li onClick={() => handleCinemaClick(item.id)}
                        key={item.id}
                        className={`flex flex-col relative gap-y-5 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px] ${
                          selectedCinemaId === item.id ? "selected-movie" : "" // Tıklanan filme göre arka plan rengini değiştir
                        }`}
                      >
                        <span className="text-black font-bold text-base">
                          {item.title}
                        </span>
                        <span className="text-black font-thin text-sm">
                          {item.adress}
                        </span>
                        <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
                          <img
                            src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/icons/heart.svg"
                            alt=""
                          />
                          <img
                            src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/icons/send.svg"
                            alt=""
                          />
                        </div>

                        {/* Ekstra resimlerin listesi */}
                        <div className="flex gap-2">
                          {item.extra &&
                            Object.values(item.extra).map(
                              (imgUrl, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={imgUrl}
                                  alt={`Ekstra Resim ${imgIndex + 1}`}
                                  width={50} // İstediğiniz boyutları ayarlayabilirsiniz
                                  height={50}
                                />
                              )
                            )}
                        </div>
                      </li>
                    );
                  })}
                </>
              ) : (
                <div>
                  <Lottie animationData={CinemaAnim} />
                </div>
              )}
            </ul>
          </div>
          {/* -------section 3--------in-------3--------kısmı */}
          <div className="w-[390px] h-[620px] bg-[#1E1E1E] rounded-2xl flex flex-col gap-y-6 p-4">
            <h1>Tarih ve Seans Seçimi</h1>
            <ul className="grid grid-cols-3 gap-x-3">
              <li className="flex flex-col items-center text-sm rounded-xl p-1 text-white bg-[#95a724]">
                <span>21 Eylül</span>
                <span>Perşembe</span>
              </li>
              <li className="flex flex-col items-center text-sm rounded-xl p-1 text-white bg-[#95a724]">
                <span>21 Eylül</span>
                <span>Perşembe</span>
              </li>
              <li className="flex flex-col items-center text-sm rounded-xl p-1 text-white bg-[#95a724]">
                <span>21 Eylül</span>
                <span>Perşembe</span>
              </li>
            </ul>
            <ul className="text-black flex flex-col gap-y-5">
              {
                mouseClick2 ? (
                  <>
                 <TarihveSeans />
                </>
                ) : (
                  <div>
                    <Lottie animationData={TimeAnim} />
                  </div>
                )
              } 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSlug;
