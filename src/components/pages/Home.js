import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-dark flex justify-center items-center grid-cols-3">
      <Link to="calculator">
        <div className="h-60 w-60 bg-white rounded-xl flex justify-center items-center mx-4">
          <h1> Calculator </h1>
        </div>
      </Link>
      <Link to="tictactoe">
        <div className="h-60 w-60 bg-white rounded-xl flex justify-center items-center mx-4">
            <h1> Tic-Tac-Toe </h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
