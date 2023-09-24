import React from "react";
import { Button, Result } from "antd";
import {Link} from 'react-router-dom'

const Tebrik = () => {
  return (
    <div className="w-full h-screen bg-[#262626] text-white flex  items-start justify-center p-24">
      <Result
        status="success"
        title="Tebrikler! Biletiniz başarıyla alındı."
        subTitle="Bilet Numaranız: 2017182818828182881"
        extra={[
            <Link to="/">
                <button className="border p-2 rounded-lg text-xl font-medium mr-10">
                 Anasayfa
                </button>
            </Link>,
            <Link to="/vizyon">
                <button className="border p-2 rounded-lg text-xl font-medium">Vizyondaki Filimler</button>
            </Link>,
        ]}
      />
    </div>
  );
};

export default Tebrik;
