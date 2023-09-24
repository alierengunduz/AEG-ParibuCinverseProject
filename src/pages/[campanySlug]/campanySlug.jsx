import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../../components/Footer";
const CampanySlug = () => {
  const [companyData, setCompanyData] = useState({});
  const [sliderData, setSliderData] = useState([])
  const { campanySlug } = useParams();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch("/companyData.json");
        const data = await res.json();
        const company = data.find((company) => company.title === campanySlug);

        if (company) {
          setCompanyData(company);
        } else {
          console.error(`Company with slug "${campanySlug}" not found.`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
  }, [campanySlug]);


  

  useEffect(() => {
       const fetchSliderData = async () => {
         try {
            const res = await fetch("/SliderCompany.json");
            const data = await res.json();
            setSliderData(data)
         } catch (error) {
           console.log(error);
         }
       }
        fetchSliderData();
  }, []);

 

   
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1">
      <div className="text-white mt-28 py-2 ml-10 flex items-center gap-x-1">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
          alt=""
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
        />
        <span className="text-gray-400 font-bold text-sm">Kampanyalar</span>
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
        />
        <span className="text-gray-400 font-bold text-sm">
          Her Pazartesi ve Çarşamba Paribu Cine...
        </span>
      </div>
      <div className="w-[80%] m-auto h-[400px] relative mt-5">
        <img
          src={companyData.img}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="my-14  flex flex-col gap-y-4 items-center justify-start">
        <p className="tracking-wide">
          Kampanya Dönemi:{" "}
          <span className="text-green-600 font-bold">
            {companyData.slugDate}
          </span>{" "}
        </p>
        <h1 className="text-3xl font-bold px-60 leading-relaxed text-center">
          {companyData.name}
        </h1>
        <div className="w-[60%] leading-relaxed text-gray-400">
          <p className="font-bold text-xl text-white">
            {companyData.slugTitleAltName}
          </p>
          <p className="text-xl font-bold text-gray-300 my-1">
            {companyData.slugTitleAlt}
          </p>
          <p>{companyData.subTitle}</p>
          <div>sadsa</div>
        </div>
        <div>
          <p>{companyData.slugAvantageName}</p>
          <p>{companyData.slugAvantageDesc}</p>
          <p>{companyData.slugAwardName}</p>
          <p>{companyData.slugAwardDesc}</p>
        </div>
        <h1 className="text-xl font-medium px-56">
          {companyData.slugExtraName}
        </h1>
        <div className="px-64">
          {companyData &&
            companyData.slugExtra &&
            Object.values(companyData.slugExtra).map((extra, index) => (
              <p className="py-1" key={index}>
                - {extra}
              </p>
            ))}
        </div>
      </div>
      <div className="px-20 my-10 w-full">
        <h1 className="text-white text-2xl font-bold">
          İlginizi Çekebilecek Diğer Kampanyalar{" "}
        </h1>
        {/* ----------slider--------- */}
        <ul className="w-full h-[460px]">
  <Slider {...settings}>
    {sliderData.map((slider, index) => (
      <li
        key={slider.id}
        className="w-full h-[460px] p-3 flex flex-col items-start justify-start"
      >
        <div className="w-full h-[200px] rounded-xl">
          <img src={slider.img} className="rounded-xl w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full bg-white text-black h-[260px] pt-3 px-5 flex flex-col items-start justify-between p-2 gap-y-4">
          <p className="font-light tracking-wide text-lg leading-relaxed">
            {slider.name}
          </p>
          <span className="font-thin text-base">{slider.desc}</span>
          <div className="flex items-center justify-between w-full mb-5">
            <div>
              <Link
                to={`/campany/${slider.title.replace(/ /g, "-")}`}
                className="border-4 border-gray-700 border-double py-2 px-10 rounded-xl hover:border-dashed transition-all duration-300"
              >
                Detaylı Bilgi
              </Link>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <p>::Kampanya Dönemi:: </p>
              <span className="text-green-500 font-bold">{slider.date}</span>
            </div>
          </div>
        </div>
      </li>
    ))}
  </Slider>
</ul>

        {/* ----------slider--------- */}
      </div>
      <Footer />
    </div>
  );
};

export default CampanySlug;
