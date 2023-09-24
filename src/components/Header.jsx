import React,{useState, useEffect} from "react";
import { BiDotsHorizontal, BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = `w-full flex items-center justify-between font-bold transition-all duration-300  py-5 px-28 text-white fixed top-0 z-50 ${
    isScrolled ? "bg-[#1E1E1E]" : "bg-transparent"
  }`;

  const items = [
    {
      label: (
        <Link className="flex items-center justify-between gap-x-7 " to="/teknolojiler">
          <div className="flex items-center gap-x-4">
            <img
              src="https://www.paribucineverse.com/assets/img/icons/header/d_custom_saloon.svg"
              alt=""
            />
            <span className="text-base font-light">Ayrıcalıklı Salonlar</span>
          </div>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="flex items-center justify-between gap-x-7" to="/cgv-arthouse">
          <div className="flex items-center gap-x-5">
            <img
              src="https://www.paribucineverse.com/assets/img/icons/header/d_cgv_arthouse.svg"
              alt=""
            />
            <span className="text-base font-light">CGV Arthouse</span>
          </div>
          <div>
            <img
              src="https://www.paribucineverse.com/assets/img/icons/header/d_cgv_arthouse_badge.svg"
              alt=""
            />
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link className="flex items-center justify-between gap-x-7" to="/gold-class">
          <div className="flex items-center gap-x-5">
            <img
              src="https://www.paribucineverse.com/assets/img/icons/header/d_saloon.svg"
              alt=""
            />
            <span className="text-base font-light">Gold Class Salon Sizin</span>
          </div>
          <div>
            <img
              src="https://www.paribucineverse.com/assets/img/icons/header/d_cgv_gold_class_badge.svg"
              alt=""
            />
          </div>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link className="flex items-center justify-start gap-x-4" to="/kurumsal-satis">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/header/d_custom_event_request.svg"
            alt=""
          />
          <span className="text-base font-light">Özel Etkinlik Talepleri</span>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link className="flex items-start justify-start gap-x-2" to="/cinema-club">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/cgv_cinema_club/cgv_cinema_club_1x.svg"
            alt=""
          />
          <span className="text-base font-light">CGV Cinema Club</span>
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link className="flex items-start justify-start gap-x-5" to="/iletisim">
          <img
            src="https://www.paribucineverse.com/assets/img/icons/header/d_help_center.svg"
            alt=""
          />
          <span className="text-base font-light">Yardım Merkezi</span>
        </Link>
      ),
      key: "5",
    },
  ];

  return (
    <header className={headerClassName}>
      <div className="flex items-center sm:gap-x-6 gap-x-2 ">
        <Link to="/">
          <img
            src="https://www.paribucineverse.com/assets/img/logo/logo.svg?v=240820231250"
            alt="logo" className="object-cover"
          />
        </Link>
        <Link to="/vizyon">Filmler</Link>
        <Link to="/sinemalar">Sinemalar</Link>
        <Link to="/kampanyalar">Kampanyalar</Link>
       <Link to="/moviepass">
       <img
          src="https://www.paribucineverse.com/assets/img/icons/cgv_movie_pass/cgv_movie_pass_1x.svg"
          alt="campany"
        />
        </Link>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="cursor-pointer">
              <BiDotsHorizontal size={30} />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="flex items-center gap-x-5">
        <button>
          {" "}
          <BiSearchAlt size={25} />{" "}
        </button>
        <a
          className="flex  items-center gap-x-2 text-black bg-gray-100 px-3 rounded-2xl py-1"
          href=""
        >
          <img
            src="https://www.paribucineverse.com/assets/img/icons/cgv_cinema_club/cgv_cinema_club_2x.svg"
            alt=""
          />
          <span className="text-sm font-light">
            Giriş Yap <br /> veya Üye Ol{" "}
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
