import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css"; //Needed for boostrap
import { useFormik, Form, FormikProvider } from "formik";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as Yup from "yup";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Stack, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider, TimePicker,TimePickerProps  } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import moment from "moment";
import SubmitPage from "./SubmitPage";
import { useNavigate } from "react-router-dom";


const BookingForm = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const noOfGuests = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let date,time;
  const ocassions = [
    {
      label: "Anniversary",
    },
    {
      label: "Birthday",
    },
    {
      label: "Engagement",
    },
    {
      label: "Nil",
    },
  ];

  // useEffect(() => {
  //   const getDate = () => {
  //     let today = new Date();
  //     let month = today.getMonth() + 1;
  //     let year = today.getFullYear();
  //     let date = today.getDate();
  //     if (month < 10) {
  //       month = "0" + month;
  //       console.log(JSON.stringify(month));
  //     }
  //     if (date < 10) {
  //       date = "0" + date;
  //       console.log(JSON.stringify(date));
  //     }
  //     setCurrentDate(year + "-" + month + "-" + date);
  //     return currentDate;
  //   };
  //   getDate();
  // }, []);

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     // setIsLoading(true);
  //     try {
  //       const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');

  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error(responseData.message);
  //       }

  //       setAvailableTimes(responseData.fetchAPI(currentDate));
  //       // let members = responseData.users;
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //     // setIsLoading(false);
  //   };
  //   sendRequest();
  // }, []);

  const LoginSchema = Yup.object().shape({
    guests: Yup.number().required("Guest is required"),
    ocassion: Yup.string().required("Please Select an ocassion"),
  });

  const formik = useFormik({
    initialValues: {
      guests: "2",
      ocassion: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("values:" + JSON.stringify(values));
      console.log("values2:" + JSON.stringify(currentTime+"/  "+currentDate));
      if(JSON.stringify(currentTime)==="" || JSON.stringify(currentDate)===""){
        alert("Please input a date and time")
      }
      else{
        alert("Your reservation has been confirmed\n" +"You have booked at " + currentTime + " on" +currentDate +" with " +values.guests +" guests")
        navigate("/")
      }
    },
  });
  
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps,setFieldValue } =
    formik;

    const elevenAM = dayjs().set('hour', 11).startOf('hour');
    const eightPM = dayjs().set('hour', 20).startOf('hour');

    const timeChange=(e)=>{
      console.log(e)
      let newTime =moment(e.$d).format('LT')
      console.log(newTime)
      setCurrentTime(newTime)
    }
    const dateChange=(e)=>{
      console.log(e)
      let newDate=moment(e.$d).format('L')
      console.log(newDate)
      setCurrentDate(JSON.stringify(newDate))
    }

  return (
    <>
      <Header />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            disablePast
            value={date}
            onChange={dateChange}
            />
            <TimePicker
             minTime={elevenAM}
             maxTime={eightPM}
             value={time}
             onChange={timeChange}
             label ="Time(11am-8pm)"
            />
            </LocalizationProvider>
            {/* <TextField
              fullWidth
              focused
              type="time"
              placeholder="5pm"
              value={formik.values.time}
              label="Time"
              variant="filled"
              error={Boolean(touched.time && errors.time)}
              helperText={touched.time && errors.time}
            /> */}
            <TextField
             fullWidth
             focused
              select
              label="Guests"
              defaultValue="Guests"
              variant="filled"
              {...getFieldProps("guests")}
              value={formik.values.guests}
              error={Boolean(touched.guests && errors.guests)}
              helperText={touched.guests && errors.guests}
            >
              {noOfGuests.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
             fullWidth
             focused
              select
              label="Ocassion"
              defaultValue="Ocassion"
              variant="filled"
              {...getFieldProps("ocassion")}
              value={formik.values.ocassion}
              error={Boolean(touched.ocassion && errors.ocassion)}
              helperText={touched.ocassion && errors.ocassion}
            >
              {ocassions.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Button type="submit">Submit</Button>
        </Form>
      </FormikProvider>
    </>
  );
};
export default BookingForm;
