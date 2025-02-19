import React from "react";
import "./css/PageNavigator.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function PageNavigator({ page, setPage }) {
  const buttonRight = () => {
    setPage(page + 1);
  };

  const buttonLeft = () => {
    if (page !== 0) {
      setPage(page - 1);
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
