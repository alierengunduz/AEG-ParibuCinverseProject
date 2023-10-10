import React, { useState } from "react";
import FormCompo from "../components/FormCompo";
import Footer from "../components/Footer";
const KurumsalSatis = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-full min-h-screen bg-[#323232] py-1">
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img
        className="w-full h-full object-cover"
          src="https://www.paribucineverse.com/assets/img/page_special_event/banner.svg"
          alt=""
        />
        <span className="absolute top-[40%] left-[35%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
          Özel Etkinlik Talepleri
        </span>
      </div>
      <div className="text-white mt-6 py-2 mx-24 flex items-center gap-x-1">
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
        <span className="text-gray-400 font-bold text-sm">
          Sinema Salonları
        </span>
      </div>
      <div className="my-10 sm:mx-32 mx-2 text-white flex flex-col gap-y-10">

        {/* --------section-----1--------- */}
        <div className=" sm:w-[1140px] w-full min-h-[357px] bg-[#161616] rounded-2xl  flex flex-col items-center justify-between gap-x-10 sm:p-7 p-2">
          <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center min-h-[310px] justify-between w-full gap-x-10">
            <div className="sm:w-[20%] w-[60%] h-full flex items-center justify-center rounded-3xl">
              <img
                src="https://www.paribucineverse.com/assets/img/page_special_event/icons/microphone.svg"
                alt=""
                className="sm:w-20 sm:h-20 w-14 h-14 bg-white p-2 rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-y-4 sm:w-[50%] w-[95%] h-full items-start justify-center">
              <h1 className="sm:text-4xl text-2xl font-bold tracking-wider">
                Organizasyon İçin
              </h1>
              {show ? null : (
                <p>
                  Son teknoloji ile donatılmış konforlu salonları ile
                  Türkiye’nin dört bir yanındaki Paribu Cineverse sinemalarında
                  organizasyonlarını unutulmaz bir deneyime dönüştür.
                </p>
              )}
            </div>
            {show ? (
              <div
                onClick={handleShow}
                className="w-[30%] cursor-pointer  flex items-center justify-center  "
              >
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/close-icon.svg"
                  alt=""
                  className="bg-white  rounded-full p-4 mb-24"
                />
              </div>
            ) : (
              <div
                onClick={handleShow}
                className="sm:w-[30%] w-[95%]  flex items-center justify-center bg-[#95A724] hover:bg-transparent hover:border hover:border-[#95A724] transition-all duration-100 rounded-3xl"
              >
                <button className="text-white  py-3 px-3 text-sm">
                  Hemen Rezervasyon Yap
                </button>
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/arrow-right.svg"
                  alt=""
                />
              </div>
            )}
          </div>
          {
            show ? (
                <div className="w-[95%]">
            <ul className="flex flex-col gap-y-6">
              <li className="list-disc">
                Türkiye'nin dört bir yanındaki Paribu Cineverse sinemaları, son
                teknoloji ile donatılmış konforlu salonları ile hizmetinizde.
                Dev perde ve stadyum tarzı oturma düzeni ile
                organizasyonlarınızı unutulmaz bir deneyime dönüştürebilirsiniz.
              </li>
              <li className="list-disc">
                Marka tanıtımları, ürün lansmanları, basın toplantıları, eğitim
                ve seminerler gibi tüm organizasyonlarınızı Paribu Cineverse’un
                keyifli ortamında, isteklerinize göre özel olarak hazırlanmış
                yiyecek ve içecek hizmetleri eşliğinde gerçekleştirebilirsiniz.
              </li>
              <li className="list-disc">
              Salon tahsis talepleriniz için aşağıdaki formu doldurabilirsiniz. Size en kısa zamanda geri dönüş yapacağız.
              </li>
            </ul>
            <h1 className="text-4xl font-bold tracking-wider my-10">Hemen Rezervasyon Yap</h1>
            <FormCompo />
          </div>
            ) : null
          }
        </div>
            
            {/* --------section-----2--------- */}
            <div className=" sm:w-[1140px] w-full min-h-[357px] bg-[#161616] rounded-2xl  flex flex-col items-center justify-between gap-x-10 sm:p-7 p-2">
          <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center min-h-[310px] justify-between w-full gap-x-10">
            <div className="sm:w-[20%] w-[60%] h-full flex items-center justify-center rounded-3xl">
              <img
                src="https://www.paribucineverse.com/assets/img/page_special_event/icons/crown.svg"
                alt=""
                className="sm:w-20 sm:h-20 w-14 h-14 bg-white p-2 rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-y-4 sm:w-[50%] w-[95%] h-full items-start justify-center">
              <h1 className="sm:text-4xl text-2xl font-bold tracking-wider">
                Doğum Günleri VIP Kutlamalar
              </h1>
              {show ? null : (
                <p>
                  Konforda sınırı bir üst seviyeye taşıyan rahat ve ferah Gold Class salonlarımız doğum günü organizasyonlarınız için hizmetinizde.
                </p>
              )}
            </div>
            {show ? (
              <div
                onClick={handleShow}
                className="w-[30%] cursor-pointer  flex items-center justify-center  "
              >
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/close-icon.svg"
                  alt=""
                  className="bg-white  rounded-full p-4 mb-24"
                />
              </div>
            ) : (
              <div
                onClick={handleShow}
                className="sm:w-[30%] w-[95%]  flex items-center justify-center bg-[#95A724] hover:bg-transparent hover:border hover:border-[#95A724] transition-all duration-100 rounded-3xl"
              >
                <button className="text-white  py-3 px-3 text-sm">
                  Hemen Rezervasyon Yap
                </button>
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/arrow-right.svg"
                  alt=""
                />
              </div>
            )}
          </div>
          {
            show ? (
                <div className="w-[95%]">
            <ul className="flex flex-col gap-y-6">
              <li className="list-disc">
                Türkiye'nin dört bir yanındaki Paribu Cineverse sinemaları, son
                teknoloji ile donatılmış konforlu salonları ile hizmetinizde.
                Dev perde ve stadyum tarzı oturma düzeni ile
                organizasyonlarınızı unutulmaz bir deneyime dönüştürebilirsiniz.
              </li>
              <li className="list-disc">
                Marka tanıtımları, ürün lansmanları, basın toplantıları, eğitim
                ve seminerler gibi tüm organizasyonlarınızı Paribu Cineverse’un
                keyifli ortamında, isteklerinize göre özel olarak hazırlanmış
                yiyecek ve içecek hizmetleri eşliğinde gerçekleştirebilirsiniz.
              </li>
              <li className="list-disc">
              Salon tahsis talepleriniz için aşağıdaki formu doldurabilirsiniz. Size en kısa zamanda geri dönüş yapacağız.
              </li>
            </ul>
            <h1 className="text-4xl font-bold tracking-wider my-10">Hemen Rezervasyon Yap</h1>
            <FormCompo />
          </div>
            ) : null
          }
        </div>

            {/* --------section-----3--------- */}
            <div className=" sm:w-[1140px] w-full min-h-[357px] bg-[#161616] rounded-2xl  flex flex-col items-center justify-between gap-x-10 sm:p-7 p-2">
          <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center min-h-[310px] justify-between w-full gap-x-10">
            <div className="sm:w-[20%] w-[60%] h-full flex items-center justify-center rounded-3xl">
              <img
                src="https://www.paribucineverse.com/assets/img/page_special_event/icons/people-default.svg"
                alt=""
                className="sm:w-20 sm:h-20 w-14 h-14 bg-white p-2 rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-y-4 sm:w-[50%] w-[95%] h-full items-start justify-center">
              <h1 className="sm:text-4xl text-2xl font-bold tracking-wider">
              Filme Özel Grup Satış
              </h1>
              {show ? null : (
                <p>
                 Eğlenceyi Paribu Cineverse’te deneyimle. Vizyondaki en iyi filmleri okul ve iş arkadaşlarınla, tanıdıklarınla, ailenle, sevdiklerinle birlikte Paribu Cineverse’lerde izleyebilirsin.
                </p>
              )}
            </div>
            {show ? (
              <div
                onClick={handleShow}
                className="w-[30%] cursor-pointer  flex items-center justify-center  "
              >
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/close-icon.svg"
                  alt=""
                  className="bg-white  rounded-full p-4 mb-24"
                />
              </div>
            ) : (
              <div
                onClick={handleShow}
                className="sm:w-[30%] w-[95%]  flex items-center justify-center bg-[#95A724] hover:bg-transparent hover:border hover:border-[#95A724] transition-all duration-100 rounded-3xl"
              >
                <button className="text-white  py-3 px-3 text-sm">
                  Hemen Rezervasyon Yap
                </button>
                <img
                  src="https://www.paribucineverse.com/assets/img/page_special_event/icons/arrow-right.svg"
                  alt=""
                />
              </div>
            )}
          </div>
          {
            show ? (
                <div className="w-[95%]">
            <ul className="flex flex-col gap-y-6">
              <li className="list-disc">
                Türkiye'nin dört bir yanındaki Paribu Cineverse sinemaları, son
                teknoloji ile donatılmış konforlu salonları ile hizmetinizde.
                Dev perde ve stadyum tarzı oturma düzeni ile
                organizasyonlarınızı unutulmaz bir deneyime dönüştürebilirsiniz.
              </li>
              <li className="list-disc">
                Marka tanıtımları, ürün lansmanları, basın toplantıları, eğitim
                ve seminerler gibi tüm organizasyonlarınızı Paribu Cineverse’un
                keyifli ortamında, isteklerinize göre özel olarak hazırlanmış
                yiyecek ve içecek hizmetleri eşliğinde gerçekleştirebilirsiniz.
              </li>
              <li className="list-disc">
              Salon tahsis talepleriniz için aşağıdaki formu doldurabilirsiniz. Size en kısa zamanda geri dönüş yapacağız.
              </li>
            </ul>
            <h1 className="text-4xl font-bold tracking-wider my-10">Hemen Rezervasyon Yap</h1>
            <FormCompo />
          </div>
            ) : null
          }
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default KurumsalSatis;
