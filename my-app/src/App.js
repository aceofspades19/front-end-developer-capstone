import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingMain from './BookingMain.js';
import ViewBooking from './ViewBooking.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { useReducer } from 'react';

function App() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

  function updateTimes(state, action)
  {
    return state; 
  }

  function initializeTimes(times){
      return  [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
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

    const handleSubmit = function(event) {
      
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

  const BookingPage = () => {
    return  (
      <>
      <Header></Header>
      <Nav></Nav>
      <ViewBooking></ViewBooking>
      <BookingMain handleChange={handleChange} handleSubmit={handleSubmit} form={form} availableTimes={availableTimes}></BookingMain>
      <Footer></Footer>
      </>
    )
  };
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking"element={<BookingPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
