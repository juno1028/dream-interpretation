import React from "react";
import { Link, useNavigate } from "react-router-dom";

function InputPage() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div class="inputpage-container">
      <div class="user-information-container"></div>
      <div class="title-container"></div>
      <div class="subtitle-container"></div>
      <div class="user-input-container">
        <textarea
          type="text"
          placeholder="이 부분을 탭해서 입력해주세요 !"
          class="user-textarea"
        />
      </div>
      <div class="analyze-button-container">
        <button className="analyze-button" onClick={handleClick}></button>
      </div>
    </div>
  );
}

export default InputPage;
