import React from 'react'

const Footer = () => {

 const Vizyon = [
    {
        id: 1,
        title: 'Oppenheimer',
    },
    {
        id: 2,
        title: 'Meg 2: Çukur',
    },
    {
        id: 3,
        title: 'Doru Macera Adası',
    },
    {
        id: 4,
        title: 'Adalet 3',
    },
    {
        id: 5,
        title: 'Barbie',
    },
    {
        id: 6,
        title: 'Konuş Benimle',
    },
    {
        id: 7,
        title: 'Gran Turismo',
    },
    {
        id: 8,
        title: "Dabbetü'l-Arz: Kıyamet",
    },
    {
        id: 9,
        title: <p>Ant-Man ve Wasp: <br /> Quantumania</p>,
    },
    {
        id: 10,
        title: <p>Ninja Kaplumbağalar: <br /> Mutant Kargaşası</p>,
    },
    {
        id: 11,
        title: "Ölümüne Aşk",
    },
    {
        id: 12,
        title: "Blue Beetle",
    },
    {
        id: 13,
        title: "Efsunlu 3: Muska",
    },
    {
        id: 14,
        title: <p>Black Panther: Yaşasın <br /> Wakanda</p>,
    },
    {
        id: 15,
        title: "Para Konuşur",
    },
    {
        id: 16,
        title: "Uzay Köpekleri",
    },
    {
        id: 17,
        title: "Para Avı",
    },
    {
        id: 18,
        title: "Rubinin Ailesi",
    },
    {
        id: 19,
        title: "Hırçın",
    },
 ]

 const Yakinda = [
    {
      title: "Küçük Allen ve Galaksi Yolcusu",
    },
    {
        title: "Bulutların Üstünde",
      },
      {
        title: "Harry Potter ve Azkaban Tutsağı",
      },
      {
        title: "Harry Potter ve Felsefe Taşı",
      },
      {
        title: "Harry Potter ve Sırlar Odası",
      },
      {
        title: "Kaçakçılar",
      },
      {
        title: "Kar ve Ayı",
      },
      {
        title: "Şeytana Sempati",
      },
      {
        title: "Şeytanın Elçileri",
      },
      {
        title: "Sonsuz Sır",
      },
      {
        title: "Cehennem Melekleri 4",
      },
  ];

  const Ayricallikli = [
    {
        title: "Gold Class",
    },
    {
        title: "Skybox",
    },
    {
        title: "Sky Auditorium",
    },
    {
        title: "Premium Cinema",
    },
    {
        title: "IMAX",
    },
    {
        title: "4DX",
    },
    {
        title: "Starium",
    },
    {
        title: "ScreenX",
    },
    {
        title: "Tembur Cinema",
    },
    {
        title: "DBOX",
    },
    {
        title: "MPX",
    },
    
  ]

  const Kurumsal = [
    {
        title:"Hakkımızda"
    },
    {
        title:"İnsan Kaynakları"
    },
    {
        title:"İşlem Rehberi"
    },
    {
        title:"Özel Etkinlik Talepleri"
    },
  ]
 
  const YardimMerkezi = [
    {
        title: "E-Bilet"
    },
    {
        title: "İade İşlemleri"
    },
    {
        title: <div>CGV MoviePass İade <br /> İşlemleri</div>
    },
    {
        title: <div>CGV MoviePass Barkod <br /> Yükleme</div>
    },
    {
        title: "Sıkça Sorulan Sorular"
    },
    {
        title: "Yorum ve Öneriler"
    },
    {
        title: "İletişim"
    },
  ]

  return (
    <div className='bg-[#121212] min-h-screen w-ful '>
        <div className='bg-[#98A726] text-white py-6 pl-10 pr-96 flex items-center justify-between'>
            <h1 className='font-bold text-3xl'>Bizi Takip Et</h1>
            <ul className='flex items-center gap-x-20'>
              <li>
                <a href="">
                    <img src="https://www.paribucineverse.com/assets/img/footer/social_media/facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                    <img src="https://www.paribucineverse.com/assets/img/footer/social_media/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                    <img src="https://www.paribucineverse.com/assets/img/footer/social_media/youtube.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                    <img src="https://www.paribucineverse.com/assets/img/footer/social_media/instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                    <img src="https://www.paribucineverse.com/assets/img/footer/social_media/tiktok.svg" alt="" />
                </a>
              </li>
            </ul>
        </div>
           <footer className='text-white my-10 px-14 flex items-start justify-evenly'>
             <div>
                <h1 className='text-2xl font-bold'>Vizyon</h1>
                <ul>
                    {
                        Vizyon.map((item) => (
                            <li key={item.id} className='my-2'>
                                <a className='hover:underline' href="">{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
             </div>
             <div>
             <h1 className='text-2xl font-bold'>Yakında</h1>
                <ul>
                    {
                        Yakinda.map((item,index) => (
                            <li key={index} className='my-2'>
                                <a className='hover:underline' href="">{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
             </div>
             <div>
                <h1 className='text-2xl font-bold'>Ayrıcalıklı</h1>
                <ul>
                    {
                        Ayricallikli.map((item,index) => (
                            <li key={index} className='my-2'>
                                <a className='hover:underline' href="">{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
             </div>
             <div className='flex flex-col gap-y-20'>
                <div>
                    <h1 className='text-2xl font-bold'>Kurumsal</h1>
                    <ul>
                        {
                            Kurumsal.map((item,index) => (
                                <li key={index} className='my-2'>
                                    <a className='hover:underline' href="">{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Yardım Merkezi</h1>
                    <ul>
                        {
                            YardimMerkezi.map((item,index) => (
                                <li key={index} className='my-2'>
                                    <a className='hover:underline' href="">{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
             </div>
             <div className='flex flex-col items-center gap-y-5'>
                <h1>Uygulamamızı indirin</h1>
                <div>
                    <img src="https://www.paribucineverse.com/assets/img/icons/store/google_play_2x.png" alt="" />
                </div>
                <div>
                    <img src="https://www.paribucineverse.com/assets/img/icons/store/app_store_2x.png" alt="" />
                </div>
                <div className='mt-5'>
                    <h1 className='text-gray-500'>Reklam vermek için:</h1>
                    <a href="">www.marsmedia.com.tr</a>
                </div>
             </div>
           </footer>
        <div className='text-white border-t border-gray-600 flex items-center justify-evenly py-1'>
            <img src="https://www.paribucineverse.com/assets/img/logo/logo.svg?v=240820231250" alt="" />
            <span>© Copyright 2023</span>
            <ul className='flex items-center gap-x-4 text-sm'>
                <li>
                    <a href="">Gizlilik Politikası</a>
                </li>
                <li>
                    <a href="">Kullanım Koşulları</a>
                </li>
                <li>
                    <a href="">Mesafeli Satış Sözleşmesi</a>
                </li>
                <li>
                    <a href="">Kişisel Verilerin Korunması</a>
                </li>
                <li>
                    <a href="">Çerez Politikası</a>
                </li>
            </ul>
            <img src="https://www.paribucineverse.com/assets/img/footer/footer-mars.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer