import React, { useState } from "react";
import Heart from "react-animated-heart";

//Fully web supported heart animation
export default function LikeButton() {
  const [isClick, setClick] = useState(false);
  return (
    <div className="LikeButton">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}