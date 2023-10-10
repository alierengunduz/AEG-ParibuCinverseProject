import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage';
import Vizyon from './pages/Vizyon';
import Yakinda from './pages/Yakinda';
import Sinemalar from './pages/Sinemalar';
import MoviePass from './pages/MoviePass';
import Kampanyalar from './pages/Kampanyalar';
import Teknolojiler from './pages/Teknolojiler';
import CgvArthouse from './pages/CgvArthouse';
import GoldClass from './pages/GoldClass';
import KurumsalSatis from './pages/KurumsalSatis';
import CinemaClub from './pages/CinemaClub';
import Tebrik from './pages/Tebrik';
import Communication from './pages/Communication';
import CampanySlug from './pages/[campanySlug]/campanySlug';
import MovieSlug from './pages/[movieSlug]/MovieSlug';
import NextMovieSlug from './pages/[nextMovieSlug]/NextMovieSlug';
import CarouselSlug from './pages/[carouselSlug]/CarouselSlug';
import TicketSlug from './pages/[ticketSlug]/TicketSlug';
import HeaderX from './components/HeaderX';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <HeaderX />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vizyon" element={<Vizyon />} />
        <Route path="/yakinda" element={<Yakinda />} />
        <Route path="/sinemalar" element={<Sinemalar />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />
        <Route path="/moviepass" element={<MoviePass />} />
        <Route path="/teknolojiler" element={<Teknolojiler />} />
        <Route path="/cgv-arthouse" element={<CgvArthouse />} />
        <Route path="/gold-class" element={<GoldClass />} />
        <Route path="/kurumsal-satis" element={<KurumsalSatis />} />
        <Route path="/cinema-club" element={<CinemaClub />} />
        <Route path="/iletisim" element={<Communication />} />
        <Route path="/tebrik" element={<Tebrik />} />
        <Route path="/campany/:campanySlug" element={<CampanySlug />} />
        <Route path="/movie/:MovieSlug" element={<MovieSlug />} />
        <Route path="/nextmovie/:NextMovieSlug" element={<NextMovieSlug />} />
        <Route path="/carousel/:CarouselSlug" element={<CarouselSlug />} />
        <Route path="/ticket/:TicketSlug" element={<TicketSlug />} />
      </Routes>
    </Router>
  );
}

export default App;
