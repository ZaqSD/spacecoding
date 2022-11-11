import * as React from 'react';

interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {

  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}
