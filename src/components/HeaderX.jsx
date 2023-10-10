import React,{useState,useEffect} from 'react'
import {BiMenuAltLeft, BiDotsHorizontal} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import {GiHamburgerMenu}  from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Button, Drawer } from 'antd';
import HeaderDrawer from './HeaderDrawer'
const HeaderX = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


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
    <header className= {`w-full flex items-center justify-between font-bold transition-all duration-300 py-1 sm:px-10 px-3 text-white fixed z-50 ${
      isScrolled ? "bg-[#1E1E1E]" : "bg-transparent"
  }`}>
   <div className='w-full sm:flex hidden items-center justify-between'>

{/* -----------section ---------1------------- */}
      <div className='flex items-center justify-center'>
    <Link to="/">
          <img
            src="https://www.paribucineverse.com/assets/img/logo/logo.svg?v=240820231250"
            alt="logo" className="object-cover"
          />
        </Link>
        <div className='opacity-100 sm:opacity-0 sm:text-3xl text-xl'>
          <GiHamburgerMenu  />
        </div>
      </div>
       {/* -----------section ---------2------------- */}
       <div className='flex items-center justify-center px-1 gap-x-5 py-2 cursor-pointer'>
     
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
        {/* -----------section ---------3------------- */}
       <div className='flex items-center gap-x-5 cursor-pointer'>
        <img src="https://www.paribucineverse.com/assets/img/icons/header/search.svg" alt="" />
        <button className='flex items-center gap-x-1 bg-white text-black py-2 px-4 rounded-2xl'>
          <img src="https://www.paribucineverse.com/assets/img/icons/cgv_cinema_club/cgv_cinema_club_2x.svg" alt="" />
          <span className='text-xs'>Giriş Yap <br /> veya Üye Ol</span>
        </button>
       </div>
    </div>
    <div className='flex sm:hidden items-center justify-between w-full'>
      <div className='text-3xl' onClick={showDrawer}>
        <BiMenuAltLeft/>
      </div>
      <div className='w-[40%]'>
      <Link to="/">
          <img
            src="https://www.paribucineverse.com/assets/img/logo/logo.svg?v=240820231250"
            alt="logo" className=" object-cover"
          />
        </Link>
      </div>
      <div>
        <AiOutlineSearch size={25}/>
      </div>
    </div>
    <Drawer
    closeIcon={null}
     headerStyle={{backgroundColor:'#1E1E1E'}}
     bodyStyle={{backgroundColor:'#1E1E1E'}}
     className='mt-10 text-white'  placement="left" onClose={onClose} open={open}>
      <HeaderDrawer/>
      </Drawer>
  </header>
  )
}

export default HeaderX