import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
const Kampanyalar = () => {
  const [campanyData, setCampanyData] = useState([]);

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const response = await axios.get("/companyData.json");
        setCampanyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCompanyData();
  }, [setCampanyData]);

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1">
      <div className="w-full h-[400px] relative">
        <img src="/images/cinema.png" alt="" />
        <span className="absolute top-[50%] left-[47%] text-white text-4xl font-bold tracking-wider">
          Kampanyalar
        </span>
      </div>
      <div className="text-white mt-28 py-2 ml-10 flex items-center gap-x-1">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
          alt=""
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
        />
        <span className="text-gray-400 font-bold text-lg">Kampanyalar</span>
      </div>
      <div className="px-10 mt-10 w-full flex items-start justify-center gap-x-10 py-10">
        <div className="w-[50%] rounded-xl">
          <img
            src="https://www.paribucineverse.com/Files/841x414.jpg"
            className="rounded-xl"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col items-start justify-start gap-y-4">
          <p>
            Kampanya Dönemi:{" "}
            <span className="text-green-500">1 - 30 Eylül 2023</span>
          </p>
          <p className="font-bold tracking-wide text-4xl leading-relaxed">
            Online Bilet Alımlarında ve Mısır <br /> Menülerinde İndirimler Seni
            Bekliyor!
          </p>
          <span className="font-bold text-xl">
            Online Bilette %10, Mısır Menülerinde %30 İndirim!
          </span>
          <button className="border-4 border-white border-double py-2 px-10 rounded-xl hover:border-dashed transition-all duration-300">
            Detaylı Bilgi
          </button>
        </div>
      </div>
      <ul className="px-10 mt-10 grid grid-cols-3 my-10 gap-x-5 gap-y-10">
        {campanyData.map((item) => (
          <li
            key={item.id}
            className="w-full relative  bg-purple-600 p-2 flex flex-col items-start justify-start gap-x-10  border"
          >
            <div className="w-full rounded-xl">
              <img src={item.img} className="rounded-xl" alt="" />
            </div>
            <div className="w-full bg-white  text-black h-full pt-3 px-5  flex flex-col items-start justify-between p-2 gap-y-4">
              <p className="font-light tracking-wide text-lg leading-relaxed">
                {item.name}
              </p>
              <span className="font-thin text-base">{item.desc}</span>
              <div className="flex items-center justify-between w-full">
                <div>
                  <Link
                    to={`/campany/${item.title.replace(/ /g, "-")}`}
                    className="border-4 border-gray-700 border-double py-2 px-10 rounded-xl hover:border-dashed transition-all duration-300"
                  >
                    Detaylı Bilgi
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-y-1">
                  <p>::Kampanya Dönemi:: </p>
                  <span className="text-green-500 font-bold">{item.date}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Kampanyalar;
