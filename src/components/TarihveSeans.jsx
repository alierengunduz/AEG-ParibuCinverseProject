import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "antd";
import FormTicket from "../components/FormTicket";

const TarihveSeans = () => {
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/moviesData.json");
        const data = await res.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <li className="w-[342px] h-[100px] bg-white rounded-lg  flex flex-col gap-y-4  justify-start p-3 shadow-sm shadow-white">
        <h1 className="text-[#94A625] font-bold border-b pb-1 shadow-sm p-1 shadow-[#94A625]">
          2D: Dublaj
        </h1>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-y-1">
              <div className="flex items-center gap-x-5">
                {item.ikidTime &&
                  Object.values(item.ikidTime).map((ikiD, index) => (
                    <span
                      onClick={showModal}
                      className="font-light bg-blue-500 text-white px-3 rounded-md py-1 hover:bg-[#94A625] cursor-pointer transition-all duration-300"
                    >
                      {ikiD}{" "}
                    </span>
                  ))}
              </div>
            </div>
          );
        })}
      </li>

      <li className="w-[342px] h-[100px] bg-white rounded-lg  flex flex-col gap-y-4  justify-start p-3 shadow-sm shadow-white">
        <h1 className="text-[#94A625] font-bold border-b pb-1 shadow-sm p-1 shadow-[#94A625]">
          2D: Altyazili
        </h1>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-y-1">
              <div className="flex items-center gap-x-5">
                {item.ikidAltyaziTime &&
                  Object.values(item.ikidAltyaziTime).map((ikiD, index) => (
                    <span
                      onClick={showModal}
                      className="font-light bg-blue-500 text-white px-3 rounded-md py-1 hover:bg-[#94A625] cursor-pointer transition-all duration-300"
                    >
                      {ikiD}{" "}
                    </span>
                  ))}
              </div>
            </div>
          );
        })}
      </li>

      <li className="w-[342px] h-[100px] bg-white rounded-lg  flex flex-col gap-y-4  justify-start p-3 shadow-sm shadow-white">
        <h1 className="text-[#94A625] font-bold border-b pb-1 shadow-sm p-1 shadow-[#94A625]">
          3D: Dublajlı
        </h1>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-y-1">
              <div className="flex items-center gap-x-5">
                {item.ucdTime &&
                  Object.values(item.ucdTime).map((ikiD, index) => (
                    <span
                      onClick={showModal}
                      className="font-light bg-blue-500 text-white px-3 rounded-md py-1 hover:bg-[#94A625] cursor-pointer transition-all duration-300"
                    >
                      {ikiD}{" "}
                    </span>
                  ))}
              </div>
            </div>
          );
        })}
      </li>
      <Modal
        footer={false}
        title="Ticket"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <FormTicket onFormSubmit={handleFormSubmit}/>
        </div>
      </Modal>
    </>
  );
};

export default TarihveSeans;
