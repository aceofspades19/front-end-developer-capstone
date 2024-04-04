import React from 'react';


class Main extends React.Component {
   
    render() {
      return <main>

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
         <div class="center flex-container">
            <div class="col">
                <h2>This weeks specials!</h2>
            </div>
            <div class="col">
            <button>Online Menu</button>
                </div>
        </div>
        <div class="items flex-container">
            <div class="col">
            <img src="greek salad.jpg"></img>
            <div class="text">
            <p class="title">Greek Salad &nbsp;&nbsp;&nbsp;<span class="price">$12.99</span></p>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <br></br>
            <p class="delivery">Order a delivery</p>
            </div>
            </div>
            <div class="col">
                <img src="bruchetta.png"></img>
                <div class="text">
                <p class="title">Bruchetta &nbsp;&nbsp;&nbsp;<span class="price">$5.99</span></p>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasons with salt and olive oil</p>
                <br></br>
                <br></br>
                <p class="delivery">Order a delivery</p>
                </div>
            </div>
            <div class="col">
            <img src="lemon dessert.jpg"></img>
            <div class="text">
            <p class="title">Lemon Dessert <span class="price">$5.00</span></p>
            <p>
                This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.
            </p>
            <br></br>
            <p class="delivery">Order a delivery</p>
            </div>
            </div>
        </div>
        <div class="testimonials flex-container">
        <div class="onecol"><h2>Testimonials</h2></div>
        <div class="col fourth"><p>Rating:</p></div>
        <div class="col fourth"><p>Rating:</p></div>
        <div class="col fourth"><p>Rating:</p></div>
        <div class="col fourth"><p>Rating:</p></div>
        </div>
        <div class="about flex-container">
            <div class="col">
        <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <br></br>
                <p>We are a family owned Mediterranean resturaunt, focused on traditional
                recipes served with a modern twist. 
                </p>
                </div>
                <div class="col">
                <div class="images flex-container">
                <div class="col first"> 
                    <img class="first" src="restaurant.jpg"></img>
                    </div>
                    <div class="col">
                    <img  class="second"  src="restaurant chef B.jpg"></img>
                    </div>
                    </div>
                </div>
        </div>

      </main>;
    }
}

export default Main;