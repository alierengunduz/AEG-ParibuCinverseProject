import React,{useState,useEffect} from "react";
import {Form, Input } from 'antd';
import Vizyondakiler from "../../components/Vizyondakiler";
import { useParams, Link } from "react-router-dom";
import Campany from "../../components/Campany";
import Footer from "../../components/Footer";
const MovieSlug = () => {


  const [movieData, setMovieData] = useState({});
  const { MovieSlug } = useParams();

    const onFinish = (values) => {
        console.log('Success:', values);
      };


      useEffect(() => {
        const fetchMovieData = async () => {
          try {
            const res = await fetch("/moviesData.json"); // JSON dosyanızın yolu
            const data = await res.json();
            const movie = data.find((movie) => movie.title === MovieSlug);
    
            if (movie) {
              setMovieData(movie);
            } else {
              console.error(`Movie with slug "${MovieSlug}" not found.`);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchMovieData();
      }, [MovieSlug]);
   
      
  return (
    <div className="bg-[#262626]  w-full relative text-white">
      <img 
        src={movieData.img}
        alt=""
        className="w-full h-[1000px] brightness-50 blur-md"
      />
      <div className="absolute top-32 w-full px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1 text-xs">
            <img
              src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
              alt=""
              className="w-4 h-4"
            />
            <img
              src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
              alt=""
              className="w-4 h-4"
            />
            <span>Vizyonda</span>
            <img
              src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
              alt=""
              className="w-4 h-4"
            />
            <span>Harry Potter ve Sırlar Odası</span>
          </div>
          <div className="flex items-center gap-x-7">
            <div className="flex items-center gap-x-1">
              <img
                src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/movie-comment.svg"
                alt=""
              />
              <span>Yorumları Oku</span>
            </div>
            <div className="flex items-center gap-x-1">
              <img
                src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/movie-point.svg"
                alt=""
              />
              <span>Puanla</span>
            </div>
            <div className="flex items-center gap-x-1">
              <img
                src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/movie-heart.svg"
                alt=""
              />
              <span>İzlemek istiyorum</span>
            </div>
            <div className="bg-white px-[1px] py-3"></div>
            <div className="flex items-center gap-x-2">
              <span>Paylaş</span>
              <img
                src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/facebook.svg"
                alt=""
              />
              <img
                src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/twitter.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-start  justify-between">
          <div className="flex items-start gap-x-7 w-full">
            <div className="flex flex-col gap-y-2">
              <div>
                {" "}
                <img
                  src={movieData.img}
                  alt=""
                  className="w-[400px] h-[600px] rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/calender.svg"
                    alt=""
                  />
                  <span>Vizyon Tarihi: 08.09.2023</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/tur.svg"
                    alt=""
                  />
                  <span>Tür: Macera</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/time.svg"
                    alt=""
                  />
                  <span>2 sa 41 dk</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 w-[85%]">
              <h1>{movieData.name}</h1>
              <h2>{movieData.en}</h2>
              <img
                src="https://www.paribucineverse.com/assets/img/icons/cinema_types/starium.svg"
                alt=""
                className="w-40 h-9 bg-white rounded-3xl p-2"
              />
              <img
                src="https://www.paribucineverse.com/assets/img/icons/ticket_flow/genel.png"
                alt=""
                className="w-10 h-10 bg-white rounded-3xl p-2"
              />
              <div className="flex flex-col text-gray-500 gap-y-1">
                <p>Yönetmen : {movieData.director}</p>
                 <p>Oyuncular: {movieData.players}</p>
                 <p>Formatlar: {movieData.format} </p>
              </div>
              <div className="flex items-center gap-x-5">
                <button className="bg-[#98A726] py-3 px-10 rounded-3xl">Hemen Bilet Al</button>
                <div className="flex items-center gap-x-1 border-2 border-double border-white py-2 px-8 rounded-3xl">
                <button>Fragmanı izle</button>
                <img src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/play-icon.svg" alt="" />
                </div>
                <button className="border-2 border-double border-white py-3 px-10 rounded-3xl">Yorumla</button>
              </div>
              <span>Film Özeti</span>
              <p>{movieData.summary}</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2 w-[5%]">
            <img
              src="https://www.paribucineverse.com/assets/modules/page-film-detay/img/star.svg"
              alt=""
            />
            <span className="text-2xl font-bold">10</span>
          </div>
        </div>
      </div>
      <div className="my-10 flex items-center justify-center">
        <Form
         className="w-[1009px] h-[145px] relative"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
        <Form.Item
        name="intro"
        rules={[
          {
            required: true,
            message: 'Please input your description!',
          },
        ]}
      >
        <Input.TextArea className="bg-transparent placeholder:text-white py-14 pl-5 border-8 border-double text-white" placeholder="Film ile ilgili yorumunuzu yazın..."  maxLength={200} />
      </Form.Item>
          <button className="bg-[#98a726] text-white py-3 px-14 rounded-2xl absolute right-4 bottom-3" type="submit">Gönder</button>
        </Form>
      </div>
            <Vizyondakiler />
            <Campany />
            <Footer />
    </div>
  );
};

export default MovieSlug;
