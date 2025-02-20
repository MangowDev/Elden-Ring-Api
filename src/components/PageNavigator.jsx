import React from "react";
import "./css/PageNavigator.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function PageNavigator({ page, setPage }) {
  const buttonRight = () => {
    setPage(Number(page) + 1);
  };

  const buttonLeft = () => {
    if (Number(page) !== 0) {
      setPage(Number(page) - 1);
    }
  };

  return (
    <div className="page-navigator-div">
      <button onClick={buttonLeft}>
        <FaArrowLeft />
      </button>
      <button onClick={buttonRight}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PageNavigator;
