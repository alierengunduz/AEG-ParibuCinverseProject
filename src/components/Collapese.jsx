import React,{useState} from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Collapese = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = () => {
    setShowAll(!showAll);
  };
  const accordions = [
    {
      question: "CGV MoviePass paketlerini nasıl satın alabilirim?",
      answer:
        "CGV MoviePass paketlerini Paribu Cineverse web sitemiz veya mobil uygulamamız üzerinden satın alabilirsin.",
    },
    {
      question:
        "CGV MoviePass barkodunu aldıktan sonra ne kadar sürede kullanmamız gerekmektedir?",
      answer:
        "Satın almış olduğun CGV MoviePass barkodlarını 6 ay içerisinde yüklemen/kullanman gerekmektedir.",
    },
    {
      question: "CGV MoviePass paketlerini üyelik hesabıma nasıl yükleyebilirim?",
      answer:
        "CGV Para barkodlarını Paribu Cineverse gişelerinde veya Paribu Cineverse web sitesi/mobil uygulaması üzerinden CGV MoviePass Barkod Yükleme sayfasından yükleyebilirsin. Mısır hediyesi ve sürpriz hediye barkodlarını sadece Paribu Cineverse büfelerinden kullanabilirsin.",
    },
    {
      question:
        "CGV MoviePass'in barkodunu yükledikten sonra ne kadar süre içerisinde kullanabilirim?",
      answer:
        "Satın almış olduğun CGV MoviePass’in CGV Para barkodunu üyeliğine yükledikten sonra 6 ay içerisinde kullanman gerekmektedir.",
    },
    {
      question: "CGV MoviePass paketlerini kullanmak için CGV Cinema Club üyesi olmam gerekiyor mu?",
      answer:
        "Evet! CGV MoviePass’in avantajlarından faydalanmak için CGV Cinema Club üyesi olman gerekiyor.",
    },
    {
      question: "CGV MoviePass paketlerinde yükleme limiti var mıdır?",
      answer:
        "Evet! CGV MoviePass’in günlük yükleme limiti 550 CGV Para’dır. Eğer daha fazla miktar CGV MoviePass satın aldıysan ertesi gün yükleyebilirsin!",
    },
    {
      question:
        "CGV MoviePass paketlerini satın aldıktan sonra CGV Para'ları nerede kullanabilirim?",
      answer:
        "CGV MoviePass paketini satın aldıktan sonra CGV Para’ları Paribu Cineverse MarkAntalya büfeleri hariç tüm lokasyonlarımızın hem gişeleri hem de büfelerinde kullanabilirsin.",
    },
    {
      question: "CGV MoviePass paketlerini sevdiklerime hediye edebilir miyim?",
      answer:
        "Tabii ki! Web sitemiz veya mobil uygulamamız üzerinden CGV MoviePass paketlerini sevdiklerine hediye edebilirsin.",
    },
    {
      question: "CGV MoviePass paketimi iade edebilir miyim?",
      answer:
        "Edebilirsin. Satın aldıktan sonra 30 gün içerisinde barkodlar kazınmamış, kullanılmamış ve hesaba yüklenmemişse web sitemiz üzerinden CGV MoviePass İade İşlemleri sayfasından iade sürecini başlatabilirsin.",
    },
  ];

  const accordionStyles = {
    maxHeight: showAll ? "1000px" : "0",
    transition: "max-height 0.5s ease-in-out",
  };


  return (
    <div className="flex flex-col items-center justify-start w-full">
    <h1 className="font-bold sm:text-4xl text-xl tracking-wider">
      Sıkça Sorulan Sorular
    </h1>
    <div className="my-10 sm:w-[70%] w-[95%]">
      <style>
        {`
          .custom-icon-color {
            color: #fff; // Icon rengini beyaz yapar
          }

          .accordion {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
          }

          .accordion.expanded {
            max-height: 1000px; /* Adjust this value based on your content */
          }
        `}
      </style>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          className={`accordion ${
            showAll || index < 5 ? "expanded" : ""
          }`}
          sx={{
            backgroundColor: "#3D4245",
            color: "#fff",
            marginBottom: "1rem",
            ...accordionStyles,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="custom-icon-color" />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{accordion.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <div className="text-center py-2">
        <button
          className="border-2 border-double py-4 px-10 rounded-3xl"
          onClick={toggleAccordion}
        >
          {showAll ? "Daha az göster" : "Daha fazla göster"}
        </button>
      </div>
    </div>
  </div>
  );
};

export default Collapese;
