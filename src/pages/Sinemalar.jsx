import React,{useState} from "react";
import ExclusiveCinema from "../components/ExclusiveCinema";
import ChooseCity from "../components/ChooseCity";
import SearchCity from "../components/SearchCity";
import ParibuData from "../components/ParibuData";
import Konum from "../components/Konum";
import Footer from "../components/Footer";
const Sinemalar = () => {
 
  const [data,setData] = useState([])
  const [select,setSelect] = useState(0)

  return (
    <div className="w-full min-h-screen bg-[#121212] py-1">
      <div className="w-full h-[400px] relative">
        <img src="/images/cinema.png" alt="" />
        <span className="absolute top-[50%] left-[47%] text-white text-4xl font-bold tracking-wider">
          Sinema Salonları
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
        <span className="text-gray-400 font-bold text-lg">
          Sinema Salonları
        </span>
      </div>

      <div className="flex items-center justify-between px-20 text-white mt-10">
        <div>
          <div className="relative">
            <ChooseCity />
          </div>
        </div>
        <div>
          <ExclusiveCinema />
        </div>
        <div>
          <SearchCity />
        </div>
        <div className="text-white  flex items-center gap-x-5  ">
          <button
          onClick={()=> setSelect(0)}
            className="text-xl font-bold tracking-wide border-b-2 pb-3"
          >
            İsme Göre Sırala
          </button>
          <button 
          onClick={()=> setSelect(1)}
            className="text-xl font-bold tracking-wide border-b-2 pb-3"
          >
            Yakınımdakiler
          </button>
          <button
          onClick={()=> setSelect(2)}
            className="text-xl font-bold tracking-wide border-b-2 pb-3"
          >
            Favoriler
          </button>
        </div>
      </div>
      <div className="text-white py-10 px-20">
        {
          select === 0  && <ParibuData data={data}  setData={setData}/>
        }
        {
          select === 1  && <Konum/>
        }
      </div>
      <Footer/>
    </div>
  );
};

export default Sinemalar;
