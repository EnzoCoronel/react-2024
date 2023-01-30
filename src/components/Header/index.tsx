import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import Button from "../Button";
import "./styles.css";

const Header = (props: any) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="upper">
        <h1 className={`title ${theme}-theme`}>2048</h1>
        <div className="best">{props.gameScore}</div>
      </div>
      <div className="under">
        <Button handleClick={toggleTheme}>Change theme!</Button>
        <Button handleClick={props.resetGame}>New Game!</Button>
      </div>
    </div>
  );
};
export default Header;
