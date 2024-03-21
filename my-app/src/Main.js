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
            <p class="title">Greek Salad</p>
            <p>The famous greek salad of crispy lttuce, peppers, olives and our Chicago
                style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            </div>
            </div>
            <div class="col">
                <img src="bruchetta.svg"></img>
                <div class="text">
                <p class="title">Bruchetta</p>
                </div>
            </div>
            <div class="col">
            <img src="lemon dessert.jpg"></img>
            <div class="text">
            <p class="title">Lemon Dessert</p>
            </div>
            </div>
        </div>


      </main>;
    }
}

export default Main;