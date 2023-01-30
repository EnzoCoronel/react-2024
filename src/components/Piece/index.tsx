import React, { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { PieceProps } from "./types";
import "./styles.css";

const Piece: React.FC<PieceProps> = ({ num, movement }) => {
  const { theme } = useContext(ThemeContext);
  //console.log(movement);
  return <div className={`piece piece_${num} ${theme}-theme ${movement}`}>{num}</div>;
};
export default Piece;
