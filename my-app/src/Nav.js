import React from 'react';

class Nav extends React.Component {
    render() {
      return <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="#">Order online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
      </nav>;
    }
}

export default Nav;