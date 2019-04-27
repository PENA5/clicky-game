import React from "react";
import "./header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
    <div className="banner">
    <h1>Game of Thrones Edition</h1>
    <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
  </div>
);

export default Header;