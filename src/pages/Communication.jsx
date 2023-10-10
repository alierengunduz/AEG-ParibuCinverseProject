import React from "react";
import Footer from "../components/Footer";
const Communication = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1">
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img
        className="w-full h-full object-cover"
          src="https://www.paribucineverse.com/assets/img/inner_page/banner.jpg"
          alt=""
        />
        <span className="absolute top-[40%] left-[42%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
          Bize Ulaşın
        </span>
      </div>
      <div className="text-white w-full  py-2 flex items-center gap-x-1 container mx-auto sm:px-44 px-5">
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
        <span className="text-gray-400 font-bold text-sm">İletişim</span>
      </div>

      <div className="w-full min-h-screen my-24 flex flex-col items-center gap-y-24 justify-start">
        <div className="sm:w-[856px] w-[95%] h-[602px] sm:mb-0 mb-32 flex flex-col items-center justify-start p-5 gap-y-5 bg-[#2F2F2F] rounded-2xl shadow-lg shadow-gray-700 ">
          <h1>Sana Nasıl Yardımcı Olabilirim</h1>
          <p>
            Sana daha hızlı yardımcı olabilmemiz için aşağıdaki başlıklardan
            birini seçerek detaylı bilgiye ulaşabilirsin.
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1  gap-x-8 gap-y-12 mt-12">
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Sıkça Sorulan Sorular</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">İnsan Kaynakları</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Yorum ve Öneriler</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Bilet İade İşlemleri</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">CGV MoviePass Barkod Yükl...</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Özel Etkinlik Talepleri</h1>
                <a className="flex items-center gap-x-1" href="">
                  <span className="text-gray-600">Detaylı Bilgi </span>
                  <img
                    src="https://www.paribucineverse.com/assets/img/icons/communication/arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>


        <div className="sm:w-[856px] w-[95%] h-[602px] md:mt-0 mt-64 flex flex-col sm:mb-0 mb-[24rem] items-center justify-start p-5 gap-y-5 bg-[#2F2F2F] rounded-2xl shadow-lg shadow-gray-700">
          <h1>İletişim</h1>
          <p>
          İletişim bilgilerimiz aşağıda yer alıyor. Dilediğin kanal aracılığıyla bizimle iletişime geçebilirsin.
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12 mt-12">
            <li className="md:w-[372px] w-full h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl pr-2">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Kayıtlı E-Posta Adresir</h1>
               <span className="text-gray-700">marssinema@hs02.kep.tr</span>
              </div>
            </li>
            <li className="md:w-[372px] w-full pr-2 h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Mersis Numarası</h1>
               <span className="text-gray-700">0612006887000019</span>
              </div>
            </li>
            <li className="md:w-[372px] w-full pr-2 h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Çağrı Merkezi</h1>
               <span className="text-gray-700">0850 220 09 67</span>
              </div>
            </li>
            <li className="md:w-[372px] w-full pr-2 h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Misafir İlişkileri E-Posta Adresi</h1>
               <span className="text-gray-700">misafir.iliskileri@cj.net</span>
              </div>
            </li>
            <li className="md:w-[372px] w-full pr-2 h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Ticaret Sicil Numarası</h1>
               <span className="text-gray-700">223390</span>
              </div>
            </li>
            <li className="md:w-[372px] w-full pr-2 h-[100px] bg-white flex items-center justify-start gap-x-1 rounded-2xl">
              <div>
                <img
                  className="bg-[#95A724] p-4 rounded-xl mx-10"
                  src="https://www.paribucineverse.com/assets/img/icons/communication/message-question.svg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-black font-bold">Adres</h1>
                <p className="text-gray-700">Dereboyu Cad. Ambarlıdere Yolu No: 4 Kat: 1 Ortaköy - Beşiktaş / İstanbul</p>
              </div>
            </li>
          </ul>
        </div>


      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Communication;
