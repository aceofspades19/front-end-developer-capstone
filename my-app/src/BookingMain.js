import React from 'react';


class BookingMain extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <> 
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
            <div class="onecol"><h2>Make a Reservation</h2></div>
                <div class="col">
            <form onSubmit={this.props.handleSubmit}>
              <label for="res-date">Choose date</label>
              <input type="date" name="date" id="res-date" value={this.props.form.date} onChange={this.props.handleChange}></input>
              <span class="error">{this.props.errors["date"]}</span>


              <label for="res-time">Choose time</label>
              <select name="time" id="res-time " value={this.props.form.time} onChange={this.props.handleChange} data-testid="availableTimes">
                <option></option>
              {this.props.availableTimes.map((availableTime, index) => (
                      <option value={index}>{availableTime}</option>
                    ))}
              </select>
              <span class="error">{this.props.errors["time"]}</span>


              <label for="guests">Number of guests</label>
              <input type="number" name="numGuests" value={this.props.form.numGuests} onChange={this.props.handleChange} placeholder="1" min="1" max="10" id="guests"></input>
              <span class="error">{this.props.errors["numGuests"]}</span>

              <label for="occasion">Occasion</label>
              <select name="reason" id="occasion" value={this.props.form.reason} onChange={this.props.handleChange}>
                <option>--- Choose Occasion ---</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
              <span class="error">{this.props.errors["reason"]}</span>


              <input type="submit" aria-label="Submit" value="Make Your reservation"></input>
          </form>
      </div>
</div>
            </>
        );
      }
  }
  export default BookingMain;