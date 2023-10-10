import React,{useState, useEffect} from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import MobilUygulama from "../components/MobilUygulama";
import { NavLink } from "react-router-dom";
import axios from "axios";
import VizyonPageComp from "../components/VizyonPageComp";
import Footer from "../components/Footer";
const Vizyon = () => {
  const [selectedValue, setSelectedValue] = useState("vizyonTarihi"); // Başlangıçta seçili değer
  const [movies, setMovies] = useState([]);
   

  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    // Verileri burada alabilirsiniz
    const getMovies = async () => {
      try {
        const res = await axios.get("/moviesData.json");
        const data = await res.data;
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (selectedValue === "vizyonTarihi") {
      // Eklenme tarihine göre sıralama yap
      const sortedMovies = [...movies].sort((a, b) => {
        const dateA = new Date(a.eklenmeTarihi);
        const dateB = new Date(b.eklenmeTarihi);
        return dateA - dateB;
      });
      setMovies(sortedMovies);
    } else if (selectedValue === "puan") {
      // Puan'a göre sıralama yap (mevcut kod)
      const sortedMovies = [...movies].sort((a, b) => b.starTitle - a.starTitle);
      setMovies(sortedMovies);
    }
  }, [selectedValue]);
  
  


  // Stil nesnesi
  const selectStyle = {
    "& .MuiSelect-select": {
      backgroundColor: "#333", // Arka plan rengi
      color: "#fff", // Yazı rengi
      border: "none", // Dış çerçeveyi kaldır
    },
    "& .MuiInputLabel-root": {
      display: "none", // "Age" yazısını gizle
    },
    "& .MuiMenuItem-root": {
      backgroundColor: selectedValue === 10 ? "green" : "transparent", // Yeşil arka plan seçilen öğe için
      color: selectedValue === 10 ? "#fff" : "#000", // Beyaz yazı rengi seçilen öğe için
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#121212] py-1">
      <div className="w-full sm:h-[400px] h-[200px] relative">
        <img className="w-full h-full object-cover" src="/images/cinema.png" alt="" />
        <span className="absolute top-[50%] sm:left-[47%] left-[40%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
          Vizyonda
        </span>
      </div>
      <div className="text-white sm:mt-28 mt-10 py-2 ml-10 flex items-center gap-x-1">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
          alt=""
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
        />
        <span className="text-gray-400 font-bold text-lg">Vizyonda</span>
      </div>
      <div className="mt-10 flex sm:flex-row flex-col gap-y-10 items-center justify-between px-10">
        <div className="text-white flex items-center text-3xl gap-x-5">
          <NavLink to="/vizyon">Vizyonda</NavLink>
          <NavLink to="/yakinda">Yakinda</NavLink>
        </div>

        <div>
          <Box sx={{ minWidth: 260 }}>
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                value={selectedValue}
                onChange={handleChange}
                sx={selectStyle} // Özel stil uygula
              >
                <MenuItem value="vizyonTarihi">Vizyon Tarihine Göre</MenuItem>
                <MenuItem value="puan">Puana Göre</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="text-white sm:mt-24 mt-5 sm:px-10 px-3">
         <VizyonPageComp  movies={movies} setMovies={setMovies}/>
      </div>
     <div>
       <MobilUygulama />
     </div>
      <div className="mt-11">
        <Footer />
      </div>
    </div>
  );
};

export default Vizyon;
