import React,{useState} from 'react'
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const ExclusiveCinema = () => {

    const [selectedRegion, setSelectedRegion] = useState(null);
  
    const items = [
        {
          label: "Tümü",
          key: "0",
        },
        {
          label: "4dx",
          key: "1",
        },
        {
          label: "D-Box",
          key: "2",
        },
        {
          label: "Goldclass",
          key: "3",
        },
        {
          label: "Imax",
          key: "4",
        },
        {
          label: "Mpx",
          key: "5",
        },
        {
          label: "Premium-Cinema",
          key: "6",
        },
        {
          label: "ScreenX",
          key: "7",
        },
        {
          label: "Sky-Audiorium",
          key: "8",
        },
        {
          label: "Skybox",
          key: "9",
        },
        {
          label: "Starium",
          key: "10",
        },
        {
          label: "Tempur",
          key: "11",
        },
       
      ];

  return (
    <div>
         <Dropdown
            className="border py-2.5 px-7 rounded-lg w-[14rem] bg-gray-800"
            overlay={
              <Space direction="vertical" className="bg-gray-700 w-full text-center overflow-auto max-h-[350px] font-bold tracking-wider">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 cursor-pointer text-gray-200"
                    onClick={() => {
                      setSelectedRegion(item.value);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </Space>
            }
          >
            <div className="flex items-center justify-between cursor-pointer">
              <span className="mr-2 text-xs">
                {selectedRegion ? selectedRegion : "Ayrıcalıklı Salon Seç"}
              </span>
              <DownOutlined />
            </div>
          </Dropdown>
    </div>
  )
}

export default ExclusiveCinema