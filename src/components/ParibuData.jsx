import React, {useEffect } from "react";
import axios from "axios";
const ParibuData = ({ data, setData }) => {
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



  return (
 <div>
       <ul className="grid grid-cols-3 gap-x-10 gap-y-6 w-full">
     {data.map((item, index) => {
  return (
    <li
      key={item.id}
      className="flex flex-col relative gap-y-3 p-3 items-center rounded-2xl bg-white justify-center  w-[419px] h-[149px]"
    >
      <span className="text-black font-bold text-base">{item.title}</span>
      <span className="text-black font-thin text-sm">{item.adress}</span>
      <div className="absolute bottom-4 right-6 flex  items-center gap-x-5">
         <img src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/icons/heart.svg" alt="" />
         <img src="https://www.paribucineverse.com/assets/img/page-exclusive-halls-detail/icons/send.svg" alt="" />
      </div>

      {/* Ekstra resimlerin listesi */}
      <div className="flex gap-2">
        {item.extra &&
          Object.values(item.extra).map((imgUrl, imgIndex) => (
            <img
              key={imgIndex}
              src={imgUrl}
              alt={`Ekstra Resim ${imgIndex + 1}`}
              width={50} // İstediğiniz boyutları ayarlayabilirsiniz
              height={50}
            />
          ))}
      </div>
    </li>
  );
})}
    </ul>
 </div>
  );
};

export default ParibuData;
