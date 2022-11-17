import "../App.css";

import * as React from "react";

interface NavBarProps {}

export default function MessageWindow(props: NavBarProps) {
  return (
    <div className="messageWindow">
      <input className="" placeholder="Search chat"></input>
    </div>
  );
}
