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
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img className="w-full h-full object-cover" src="/images/cinema.png" alt="" />
        <span className="absolute top-[50%] sm:left-[47%] left-[27%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
          Sinema Salonları
        </span>
      </div>
      <div className="text-white sm:mt-28 mt-10 py-2 sm:ml-10 ml-5 flex items-center gap-x-1">
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

      
      <div className="text-white py-10 sm:px-20 px-2s">
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
