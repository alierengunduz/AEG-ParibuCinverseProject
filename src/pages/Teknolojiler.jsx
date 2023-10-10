import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
const Teknolojiler = () => {

const [data,setData] = useState([])

useEffect(() => {
    const getData = async () => {
        try {
            const  res = await axios.get('/TeknolojiData.json')
            const data = await res.data
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }
    getData()
} ,[])

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white py-1">
          <div className="w-full sm:h-[400px] h-[200px] relative">
        <img className='w-full h-full object-cover' src="https://www.paribucineverse.com/assets/img/page-exclusive-halls/ayricalik_salonlar_hero_banner.jpg" alt="" />
        <span className="absolute top-[50%] sm:left-[47%] left-[23%] text-white sm:text-4xl text-2xl font-bold tracking-wider">
        Ayrıcalıklı Salonlar
        </span>
      </div>
      <div className="text-white  py-2 ml-10 sm:mt-0 mt-3 flex items-center gap-x-1">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/home.svg"
          alt=""
          className='w-4'
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/breadcrumb/arrow-right.svg"
          alt=""
          className='w-4'
        />
        <span className="text-gray-400 font-bold text-sm">Ayrıcalıklı Salonlar</span>
      </div>

       <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-y-14 pl-10 pr-4 my-5'>
        {
            data.map((item) => (
                <li key={item.id} className='w-[310px] h-[400px] rounded-xl bg-white text-gray-600'>
                    <div className='h-[50%]'>
                        <img src={item.img} alt="" className='w-full h-full' />
                    </div>
                    <div className='h-[50%] pt-3 flex flex-col items-center justify-start gap-y-2'>
                        <h1 className='text-base font-bold text-center h-[60px]'>{item.title}</h1>
                        <button className='bg-[#98A726] text-white w-[50%] hover:bg-green-600 transition-all duration-300 py-2 rounded-lg'>{item.action}</button>
                        <div className='w-full flex items-center h-full rounded-b-xl pt-5 justify-center'>
                        <div className='w-[50%] h-full rounded-bl-xl flex gap-x-2'>
                            <img src={item.naviIcon} alt="" className='w-6 h-6'/>
                            <span className='text-xs'>{item.naviTitle}</span>
                        </div>
                        <div className='w-[50%] h-full rounded-br-xl flex gap-x-2'>
                        <img src={item.filmIcon} alt="" className='w-6 h-6' />
                            <span className='text-xs'>{item.filmTitle}</span>
                        </div>
                    </div>
                    </div>
                </li>
            ) )
        }
       </ul>
       
       <div>
              <Footer />
       </div>
    </div>
  )
}

export default Teknolojiler