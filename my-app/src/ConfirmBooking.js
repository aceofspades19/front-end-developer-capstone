import React from 'react';


class ConfirmBooking extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
        return <>
              <div class="top flex-container">
            <div class="col">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <br></br>
                <p>We are a family owned Mediterranean resturaunt, focused on traditional
                recipes served with a modern twist. 
                </p>
                <button>Reserve a Table</button>
            </div>
            <div class="col">
                <img alt="top image" src="restauranfood.jpg"></img>
            </div>
         </div>
            <div class="booking flex-container">

            <h3 class="confirm">Thank you for booking, booking is confirmed!</h3>
            </div>
         
        </>
    }
}
export default ConfirmBooking;