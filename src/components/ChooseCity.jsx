import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const CountrySearch = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const items = [
    {
      label: "Tümü",
      key: "0",
    },
    {
      label: "İstanbul Anadolu",
      key: "1",
    },
    {
      label: "İstanbul Avrupa",
      key: "2",
    },
    {
      label: "İzmir",
      key: "3",
    },
    {
      label: "Ankara",
      key: "4",
    },
    {
      label: "Antalya",
      key: "5",
    },
    {
      label: "Aydın",
      key: "6",
    },
    {
      label: "Bursa",
      key: "7",
    },
    {
      label: "Denizli",
      key: "8",
    },
    {
      label: "Erzurum",
      key: "9",
    },
    {
      label: "Eskişehir",
      key: "10",
    },
    {
      label: "Kahramanmaraş",
      key: "11",
    },
    {
      label: "Kayseri",
      key: "12",
    },
    {
      label: "Kocaeli",
      key: "13",
    },
    {
      label: "Konya",
      key: "14",
    },
    {
      label: "Mersin",
      key: "15",
    },
    {
      label: "Muğla",
      key: "16",
    },
    {
      label: "Osmaniye",
      key: "17",
    },
    {
      label: "Sakarya",
      key: "18",
    },
    {
      label: "Samsun",
      key: "19",
    },
    {
      label: "Şanlıurfa",
      key: "20",
    },
    {
      label: "Tekirdağ",
      key: "21",
    },
    {
      label: "Trabzon",
      key: "22",
    },
    {
      label: "Adana",
      key: "23",
    },
    {
      label: "Çanakkale",
      key: "24",
    },
    {
      label: "Gaziantep",
      key: "25",
    },
    {
      label: "Kırıkale",
      key: "26",
    },
    {
      label: "Diyarbakır",
      key: "27",
    },
    {
      label: "Afyon",
      key: "28",
    },
    {
      label: "Bolu",
      key: "29",
    },
    {
      label: "Van",
      key: "30",
    },
    {
      label: "Çorum",
      key: "31",
    },
  ];

  return (
    <div>
      <Dropdown
        className="border py-4 w-[15.5rem] p-2 rounded-lg  bg-gray-800"
        overlay={
          <Space
            direction="vertical"
            className="bg-gray-700 w-full text-center overflow-auto max-h-[350px] font-medium tracking-normal"
          >
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
        <div className="flex items-center justify-between w-full cursor-pointer">
          <span className="sm:mr-2 mr-0 text-xs">
            {selectedRegion ? selectedRegion : "Şehir Seçiniz"}
          </span>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

export default CountrySearch;
