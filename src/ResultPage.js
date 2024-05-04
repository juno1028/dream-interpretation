import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { response } = location.state || { response: "No data received." };

  console.log("aaaa", response);

  return (
    <div>
      <h1>Response from GPT</h1>
      <p>{response}</p>
    </div>
  );
}

export default ResultPage;
