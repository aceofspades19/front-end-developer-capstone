import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingMain from './BookingMain.js';
import ViewBooking from './ViewBooking.js';
import {  Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { useReducer } from 'react';
import  fakeAPI  from './FakeAPI.js';
import ConfirmBooking from './ConfirmBooking.js';
import { useNavigate } from "react-router-dom";


function App() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);
  const [form, setForm] = useState({}
    );
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function updateTimes(state, action)
  {
    return state; 
  }

  function initializeTimes(times){
      return fakeAPI.fetchAPI((new Date()))
  }

  const handleValidation = () => {
    const formFields = {...form};
    const formErrors = {};
    let formIsValid = true;

    if(!formFields["date"] ){
      formIsValid = false;
      formErrors["date"] = "Please enter a date";
    }

    if(!formFields["time"] ){
      formIsValid = false;
      formErrors["time"] = "Please enter a time";
    }

    if(!formFields["numGuests"] || formFields["numGuests"] <= 0 ){
      formIsValid = false;
      formErrors["numGuests"] = "Cannot be empty or less than or equal to 0";
    }

    if(!formFields["reason"] ){
      formIsValid = false;
      formErrors["reason"] = "Please enter an occaision";
    }



    setErrors(formErrors)
    return formIsValid;
  }


    const handleChange = function(event) {    
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(name, value); 
      setForm({
        ...form,
      [name]: value   
     });
        }


    const HandleSubmit = function(event) {
      event.preventDefault();
      if(!handleValidation()){
        return; 
      }
      const result = fakeAPI.submitAPI(new FormData(document.querySelector('form')));
      if(result){
        return navigate("/booking_confirm")    
      }
    }
    

  const HomePage = () => {
    return  (   
      <>
    <Header></Header>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
    </>
    );
  };

  const BookingConfirmationPage = () => {
    return (
      <>
      <Header></Header>
      <Nav></Nav>
      <ConfirmBooking></ConfirmBooking>
      <Footer></Footer>
      </>
    )
  }

  const BookingPage = () => {
    return  (
      <>
      <Header></Header>
      <Nav></Nav>
      <ViewBooking></ViewBooking>
      <BookingMain handleChange={handleChange} handleSubmit={HandleSubmit} form={form} availableTimes={availableTimes} errors={errors}></BookingMain>
      <Footer></Footer>
      </>
    ) 
  };
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking"element={<BookingPage/>}></Route>
        <Route path="/booking_confirm"element={<BookingConfirmationPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
