import React from "react";
import { ThemeContext } from "../../theme/ThemeContext";
// import { ScoreProps } from "./types";
import "./styles.css";

const Score = (props: any) => {
  return (
    <div className="score">
      <span>{props.type}</span>
      <span className="num">{props.score}</span>
    </div>
  );
};

export default Score;
