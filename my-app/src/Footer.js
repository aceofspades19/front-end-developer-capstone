import React from 'react';

class Footer extends React.Component {
    render() {
      return <footer>
        <div class="flex-container">
            <div class="col fourth">
                <img src="Mario and Adrian A.jpg"></img>
            </div>
            <div class="col fourth">
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
                </div>
                <div class="col fourth address">
                    <p>123 Fake St, New York</p>
                    <p>(555) 555-555</p>
                    <p>info@littlelemon.com</p>
                </div>
                <div class="col fourth address">
                <p>Address</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
        </div>

      </footer>;
    }
}
export default Footer;