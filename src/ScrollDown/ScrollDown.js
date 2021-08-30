import React, { useState } from "react";
import "./ScrollDown.css";

const ScrollDown = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <div
        onClick={scrollToTop}
        className="btn"
        style={{ display: visible ? "inline" : "none" }}
      ></div>
    </div>
  );
};

export default ScrollDown;
