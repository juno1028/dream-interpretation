import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/input");
  };
  return (
    <div className="homepage-container">
      <Link to="/input">
        <button className="start-button" onClick={handleClick}>
          시작하기
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
