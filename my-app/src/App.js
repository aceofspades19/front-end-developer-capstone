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
  const navigate = useNavigate();

  function updateTimes(state, action)
  {
    return state; 
  }

  function initializeTimes(times){
      return fakeAPI.fetchAPI((new Date()))
  }

  const [form, setForm] = useState({
    date: '',
    time: '', 
    numGuests: '',
    reason: '',
  });


    const handleChange = function(event) {    
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setForm({
      [name]: value    });
    }


    const HandleSubmit = function(event) {
      event.preventDefault();
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
      <BookingMain handleChange={handleChange} handleSubmit={HandleSubmit} form={form} availableTimes={availableTimes}></BookingMain>
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
