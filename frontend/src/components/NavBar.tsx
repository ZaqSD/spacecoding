import "../App.css";

import * as React from "react";

interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  return (
    <div className="navbar">
      <a className="navbar-item" href="/">
        Home
      </a>
      <a className="navbar-item" href="/forum">
        Forum
      </a>
      <a className="navbar-item" href="/challanges">
        Challanges
      </a>
      <div className="navbar-right">
        <a className="navbar-item" href="/profile">
          Profile
        </a>
        <a className="navbar-item" href="/login">
          Logout
        </a>
      </div>
    </div>
  );
}
