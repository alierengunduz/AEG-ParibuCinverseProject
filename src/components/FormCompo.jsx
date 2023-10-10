import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";



const FormCompo = () => {

    const [activity, setaAtivity] = useState("");
    const [cinema, setCinema] = useState("");
    const [day, setDay] = useState("");
    const [week, setWeek] = useState("");
    const [year, setYear] = useState("");
    const [startTime, setStartTime] = useState("");
    const [finishTime, setFinishTime] = useState("");
    const [ikram, setIkram] = useState(false);
    const [film, setFilm] = useState("");
    const [extraArea, setExtraArea] = useState("");
    const [ikramArea, setIkramArea] = useState("");
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [filmData, setFilmData] = useState([]);

    const onFinish = (values) => {
        // Step 3: Include age value in the form data
        console.log("Success:", {
          ...values,
          activity,
          cinema,
          day,
          week,
          year,
          startTime,
          finishTime,
          film,
          extraArea,
          ikramArea
        });
        form.resetFields();
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
    
      const handleChange = (event) => {
        setaAtivity(event.target.value);
      };
    
      const handleChangeCinema = (event) => {
        setCinema(event.target.value);
      };
    
      const handleChangeDate = (event) => {
        setDay(event.target.value);
      };
    
      const handleChangeWeek = (event) => {
        setWeek(event.target.value);
      };
    
      const handleChangeYear = (event) => {
        setYear(event.target.value);
      };
    
      const handleChangeStartTime = (event) => {
        setStartTime(event.target.value);
      };
    
      const handleChangeFinishTime = (event) => {
        setFinishTime(event.target.value);
      };
    
      const handleChangeFilm = (event) => {
        setFilm(event.target.value);
      };
    
      const handleIkram = (event) => {
        setIkram(!ikram);
      };
    
      const handleExtraArea = (event) => {
        setExtraArea(event.target.value);
      }
    
      const handleIkramArea = (event) => {
        setIkramArea(event.target.value);
      }
    
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/paribu.json");
            const data = await res.data;
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
    
      useEffect(() => {
        const filmData = async () => {
          try {
            const res = await axios.get("/FilmData.json");
            const data = await res.data;
            setFilmData(data);
          } catch (error) {
            console.log(error);
          }
        };
        filmData();
      }, []);
    
      // Başlangıç saatlerini oluşturacak bir fonksiyon
      const generateStartTimes = () => {
        const startTimes = [];
        const startTime = new Date();
        startTime.setHours(9, 0, 0, 0); // Başlangıç saati 9:00 olarak ayarlanır
    
        while (startTime.getHours() < 21) {
          // 20:45'ten önceki saatlere kadar döngü devam eder
          const formattedTime = startTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          startTimes.push(formattedTime);
          startTime.setMinutes(startTime.getMinutes() + 15); // Her seferinde 15 dakika eklenir
        }
    
        return startTimes;
      };
    
      // Başlangıç saatlerini alıyoruz
      const startTimes = generateStartTimes();
    
      // Bitiş saatlerini oluşturacak bir fonksiyon
      const generateFinishTimes = () => {
        const finishTimes = [];
        const finishTime = new Date();
        finishTime.setHours(10, 0, 0, 0); // Bitiş saati 10:00 olarak ayarlanır
    
        while (finishTime.getHours() < 22) {
          // 21:45'ten önceki saatlere kadar döngü devam eder
          const formattedTime = finishTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          finishTimes.push(formattedTime);
          finishTime.setMinutes(finishTime.getMinutes() + 15); // Her seferinde 15 dakika eklenir
        }
    
        return finishTimes;
      };
    
      const { TextArea } = Input;
    
      // Bitiş saatlerini alıyoruz
      const finishTimes = generateFinishTimes();


  return (
    <div className="my-10">
    <Form
      form={form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="flex items-center gap-x-10 w-full">
        <Form.Item
          className="w-full"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="Ad"
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your surname!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="Soyad"
          />
        </Form.Item>
      </div>

      <div className="flex items-center gap-x-10 w-full">
        <Form.Item
          className="w-full"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="E-Posta"
          />
        </Form.Item>

        <Form.Item
          className="w-full"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phoneNumber!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="Cep Telefonu"
          />
        </Form.Item>
      </div>

      <div className="flex items-center gap-x-10 w-full">
        <Form.Item
          className="w-full"
          name="company"
          rules={[
            {
              required: true,
              message: "Please input your company!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="Firma Bilgisi"
          />
        </Form.Item>

        <Form.Item
          className="w-full"
          name="count"
          rules={[
            {
              required: true,
              message: "Please input your count!",
            },
          ]}
        >
          <Input
            className="bg-gray-700 outline-none border-none text-white w-full py-3 placeholder:text-white"
            placeholder="Kişi Sayısı"
          />
        </Form.Item>
      </div>
      {/* ------------etkinlik select---------------- */}
      <div>
        <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="white-label" // Add this class
            >
              Etkinlik Seçiniz
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={activity}
              label="Etkinlik Seçiniz"
              className="text-white placeholder:text-white"
              onChange={handleChange}
              style={{ color: "white" }}
            >
              <MenuItem value="ozelFimSeansi">Özel Film Seansı</MenuItem>
              <MenuItem value="dogumGunu">Doğum Günü</MenuItem>
              <MenuItem value="evlilikTeklifi">Evlilik Teklifi</MenuItem>
              <MenuItem value="kurumsalEtkinlik">Kurumsal Etkinlik</MenuItem>
              <MenuItem value="diger">Diğer</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {/* --------------cinema select---------------- */}
      <div className="my-5">
        <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="white-label" // Add this class
            >
              Sinema Seçiniz
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cinema}
              label="Sinema Seçiniz"
              className="text-white placeholder:text-white"
              onChange={handleChangeCinema}
              style={{ color: "white" }}
            >
              {data.map((item) => (
                <MenuItem key={item.id} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* --------------Total Date-------Start--------- */}

      <div className="flex sm:flex-row flex-col items-center justify-between gap-x-10">
        {/* --------------day select---------------- */}
        <div className="my-5 w-full">
          <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="white-label" // Add this class
              >
                Gün
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                label="Gün Seçiniz"
                className="text-white placeholder:text-white"
                onChange={handleChangeDate}
                style={{ color: "white" }}
              >
                {Array.from({ length: 31 }, (_, index) => (
                  <MenuItem
                    key={index + 1}
                    value={(index + 1).toString()}
                  >
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* --------------week select---------------- */}
        <div className="my-5 w-full">
          <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="white-label" // Add this class
              >
                Ay
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={week}
                label="Etkinlik Seçiniz"
                className="text-white placeholder:text-white"
                onChange={handleChangeWeek}
                style={{ color: "white" }}
              >
                <MenuItem value="January">Ocak</MenuItem>
                <MenuItem value="February">Şubat</MenuItem>
                <MenuItem value="March">Mart</MenuItem>
                <MenuItem value="April">Nisan</MenuItem>
                <MenuItem value="May">Mayıs</MenuItem>
                <MenuItem value="June">Haziran</MenuItem>
                <MenuItem value="July">Temmuz</MenuItem>
                <MenuItem value="August">Ağustos</MenuItem>
                <MenuItem value="September">Eylül</MenuItem>
                <MenuItem value="October">Ekim</MenuItem>
                <MenuItem value="November">Kasım</MenuItem>
                <MenuItem value="December">Aralık</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* --------------year---------------- */}
        <div className="my-5 w-full">
          <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="white-label" // Add this class
              >
                Yıl
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Etkinlik Seçiniz"
                className="text-white placeholder:text-white"
                onChange={handleChangeYear}
                style={{ color: "white" }}
              >
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      {/* --------------Total---Time---Start------ */}
      <div className="flex items-center justify-between gap-x-10">
        {/* --------------Start----Time------ */}

        <div className="w-full">
          <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="white-label" // Add this class
              >
                Başlangıç Saati
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={startTime}
                label="Başlangıç Saati"
                className="text-white placeholder:text-white"
                onChange={handleChangeStartTime}
                style={{ color: "white" }}
              >
                {startTimes.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* --------------Finish----Time------ */}

        <div className="w-full">
          <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="white-label" // Add this class
              >
                Bitiş Saati
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={finishTime}
                label="Bitiş Saati"
                className="text-white placeholder:text-white"
                onChange={handleChangeFinishTime}
                style={{ color: "white" }}
              >
                {finishTimes.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      {/* --------Film---Select------ */}
      <div className="my-5">
        <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="white-label" // Add this class
            >
              Film Seçiniz
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={film}
              label="Film Seçiniz"
              className="text-white placeholder:text-white"
              onChange={handleChangeFilm}
              style={{ color: "white" }}
            >
              {filmData.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      {/* --------extra---Select------ */}
      <div>
        <input
          onClick={handleIkram}
          value={ikram}
          id="ikram"
          type="checkbox"
          className="w-5 h-5"
        />
        <label
          htmlFor="ikram"
          className="text-white font-bold py-3 select-none text-2xl tracking-widest pl-2"
        >
          İkram İsteniyor mu?
        </label>
      </div>
          {/* --------ikram---Area------ */}
    {
      ikram && (
        <div>
        <Form.Item>
          <TextArea onChange={handleIkramArea} value={ikramArea}
            placeholder="İkram kişi sayısı, varsa menü tercihlerinizi bu alanda belirtebilirsiniz."
            className="bg-[#374151] border-none outline-none placeholder:text-gray-300 pt-5 pl-5 text-white"
            rows={4}
          />
        </Form.Item>
      </div>
      )
    }
      {/* --------extra---Area------ */}
      <div>
        <Form.Item>
          <TextArea onChange={handleExtraArea} value={extraArea}
            placeholder="Yukarıdakiler dışında eklemek istediklerinizi yazınız."
            className="bg-[#374151] border-none outline-none placeholder:text-gray-300 pt-5 pl-5 text-white"
            rows={4}
          />
        </Form.Item>
      </div>

     <div className="text-end">
     <button
        type="submit"
        className="text-xl bg-[#98A726] py-2 px-12 rounded-2xl mt-5 text-white"
      >
        Gönder
      </button>
     </div>
    </Form>
  </div>
  )
}

export default FormCompo;