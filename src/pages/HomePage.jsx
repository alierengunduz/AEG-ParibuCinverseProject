import React from 'react';
import CarouselPage from '../components/MainSection/CarouselSection';
import Vizyondakiler from '../components/Vizyondakiler';
import YakindaVizyon from '../components/YakindaVizyon';
import Campany from '../components/Campany';
import MoviePass from '../components/MoviePass';
import CinemaClub from '../components/CinemaClub';
import Footer from '../components/Footer';
const HomePage = () => {

 

  return (
    <div className='w-full min-h-screen'>
        <CarouselPage /> 
        <Vizyondakiler /> 
        <YakindaVizyon /> 
        <Campany />
        <MoviePass />
        <CinemaClub />
        <Footer />
    </div>
  );
};

export default HomePage;
