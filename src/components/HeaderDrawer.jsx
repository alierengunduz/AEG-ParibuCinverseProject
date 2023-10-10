import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const HeaderDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }


  return (
    <div className="flex flex-col gap-y-5 py-5">
      {/* section -----------1---------------- */}
      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/vizyon">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_video-play.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Filmler
          </span>
        </Link>
      </div>
      {/* section -----------2---------------- */}
      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/sinemalar">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_location.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Sinemalar
          </span>
        </Link>
      </div>
      {/* section -----------3---------------- */}
      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/kampanyalar">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_star.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Kampanyalar
          </span>
        </Link>
      </div>
      {/* section -----------4---------------- */}
      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/teknolojiler">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_saloon.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Ayrıcalıklı Salonlar
          </span>
        </Link>
      </div>
      {/* section -----------5---------------- */}
      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/moviepass">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_cgv_movie_pass.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            CGV MoviePass
          </span>
        </Link>
      </div>
      {/* section -----------6---------------- */}

      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/cgv-arthouse">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_cgv_arthouse.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            CGV Arthouse
          </span>
        </Link>
      </div>
      {/* section -----------7---------------- */}

      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/gold-class">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_gold_class_saloon.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Gold Class Salon Sizin
          </span>
        </Link>
      </div>
      {/* section -----------8---------------- */}

      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/kurumsal-satis">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_custom_event_request.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            Özel Etkinlik Talepleri
          </span>
        </Link>
      </div>
      {/* section -----------9---------------- */}

      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/cinema-club">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_cgv_cinema_club.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
            CGV Cinema Club
          </span>
        </Link>
      </div>
      {/* section -----------10---------------- */}

      <div className="border-b pb-2 border-dashed border-gray-700">
        <Link className="flex items-center gap-x-2" to="/iletisim">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_help_center.svg"
            alt=""
          />
          <span className="font-medium tracking-wide text-base text-white">
              Yardım Merkezi
          </span>
        </Link>
      </div>
      {/* section -----------11---------------- */}

      <div onClick={handleDrawer} className="border-b pb-2 border-dashed border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
            <img src="https://www.paribucineverse.com/assets/img/icons/mobile_menu/m_corporate.svg" alt="" />
            <span>Kurumsal</span>
        </div>
        <div>
            <img src="https://www.paribucineverse.com/assets/img/page-moviepass/accordion-arrow.svg" alt="" />
        </div>
      </div>

        {
            isDrawerOpen && (
                <ul className="flex flex-col gap-y-2 transition-all duration-1000 ease-in-out">
                <li>Hakkımızda</li>
                <li>İnsan Kaynakları</li>
                <li>İşlem Rehberi</li>
                <li>Özel Etkinlik Talepleri</li>
                <li>Bilgilendirmeler</li>
              </ul>
            )
        }


        <div className="flex flex-col items-center my-2">
            <h1 className="text-center text-base font-bold mb-4">Bizi Takip Et</h1>
            <ul className="flex items-center gap-x-6">
                <li>
                    <img src="https://www.paribucineverse.com/assets/img/header/mobile_menu/facebook.svg" alt="" />
                </li>
                <li>
                    <img src="https://www.paribucineverse.com/assets/img/header/mobile_menu/twitter.svg" alt="" />
                </li>
                <li>
                    <img src="https://www.paribucineverse.com/assets/img/header/mobile_menu/youtube.svg" alt="" />
                </li>
                <li>
                    <img src="https://www.paribucineverse.com/assets/img/header/mobile_menu/instagram.svg" alt="" />
                </li>
                <li>
                    <img src="https://www.paribucineverse.com/assets/img/header/mobile_menu/tiktok.svg" alt="" />
                </li>
            </ul>
            <img className="mt-4" src="https://www.paribucineverse.com/assets/img/footer/footer-mars.svg" alt="" />
        </div>
        
   











    </div>
  );
};

export default HeaderDrawer;
