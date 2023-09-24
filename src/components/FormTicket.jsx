import React, { useState } from "react";
import { Form, Input } from "antd";
import { Box, FormControl, MenuItem, Select } from "@mui/material";



const FormTicket = ({ onFormSubmit }) => {

    const [activity, setaAtivity] = useState("");
    const [ikram, setIkram] = useState(false);
    const [extraArea, setExtraArea] = useState("");
    const [ikramArea, setIkramArea] = useState("");
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Step 3: Include age value in the form data
       
        form.resetFields();
        onFormSubmit();
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
    
      const handleChange = (event) => {
        setaAtivity(event.target.value);
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
    
      const { TextArea } = Input;
    

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

     
      {/* ------------etkinlik select---------------- */}
      <div>
        <Box className="bg-[#374151] rounded-xl" sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={activity}
              label="Ödeme Yöntemi"
              className="text-white placeholder:text-white"
              onChange={handleChange}
              style={{ color: "white" }}
            >
              <MenuItem value="ozelFimSeansi">Kredi Kartı</MenuItem>
              <MenuItem value="dogumGunu">Nakit</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

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

export default FormTicket;