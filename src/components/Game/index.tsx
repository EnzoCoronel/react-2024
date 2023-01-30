import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { useEvent } from "../../utils/keyDownEvent";
import {
  handleSwipeDown,
  handleSwipeLeft,
  handleSwipeRight,
  handleSwipeUp,
} from "../../utils/movements";
import Board from "../Board";
import Button from "../Button";
import GameOverMessage from "../GameOverMessage";
import Header from "../Header";
import Score from "../Score";
import "./styles.css";

const Game = () => {
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  const [gameState, setGameState] = useState(new Array(16).fill(0));
  const { theme } = useContext(ThemeContext);
  const [gameOver, setGameOver] = useState(false);
  const [dummy, setDummy] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [best, setBest] = useState<number>(0);
  const [gamePieces, setGamePieces] = useState<
    Array<{
      value: number;
      movement: string;
    }>
  >([]);
  let gameStateObject;

  const initialize = () => {
    setBest(Number(localStorage.getItem("best")));
    let newGrid = [...gameState];
    newGrid = addNumber(newGrid);
    newGrid = addNumber(newGrid);
    setGameState(newGrid);
    let newGamePieces = newGrid.map((piece) => {
      return {
        value: piece,
        movement: "",
      };
    });
    setGamePieces(newGamePieces);
  };

  const addNumber = (currentGrid: number[]) => {
    let newGrid = [...currentGrid];
    let added = false;
    let left_spaces: number[] = []; // array with indexes of currentGrid's empty spaces

    newGrid.forEach((value, index) => {
      if (value === 0) {
        left_spaces.push(index);
      }
    });

    if (left_spaces.length === 0) {
      if (isGameOver()) {
        setGameOver(true);
      }
      return newGrid;
    }

    while (!added) {
      let position = Math.floor(Math.random() * left_spaces.length);
      newGrid[left_spaces[position]] = Math.random() > 0.5 ? 2 : 4;
      added = true;
    }
    return newGrid;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    let nextScore = 0;
    let newGrid = [...gameState];
    let newGamePieces = newGrid.map((piece) => {
      return {
        value: piece,
        movement: "",
      };
    });
    let type = 0;
    let space: number[];
    switch (event.keyCode) {
      case UP_ARROW:
        gameStateObject = handleSwipeUp(gameState);
        newGrid = gameStateObject.newArray;
        newGamePieces = newGrid.map((piece) => {
          return {
            value: piece,
            movement: "",
          };
        });
        nextScore = gameStateObject.score + score;
        setScore(nextScore);
        space = gameStateObject.newposition;
        if (gameStateObject.position.length) {
          gameStateObject.position.forEach((piece, index) => {
            let anime = space[index];
            while (space[index] < piece) {
              type++;
              space[index] += 4;
            }
            if (newGamePieces[anime])
              newGamePieces[anime].movement = `up_class${type}`;
            type = 0;
          });
        }
        setGamePieces(newGamePieces);
        break;

      case DOWN_ARROW:
        gameStateObject = handleSwipeDown(gameState);
        newGrid = gameStateObject.newArray;
        newGamePieces = newGrid.map((piece) => {
          return {
            value: piece,
            movement: "",
          };
        });
        nextScore = gameStateObject.score + score;
        setScore(nextScore);
        space = gameStateObject.newposition;
        if (gameStateObject.position.length) {
          gameStateObject.position.forEach((piece, index) => {
            let anime = space[index];
            while (space[index] > piece) {
              type++;
              space[index] -= 4;
            }
            if (newGamePieces[anime])
              newGamePieces[anime].movement = `down_class${type}`;
            type = 0;
          });
        }
        setGamePieces(newGamePieces);
        break;

      case LEFT_ARROW:
        gameStateObject = handleSwipeLeft(gameState);
        newGrid = gameStateObject.newArray;
        newGamePieces = newGrid.map((piece) => {
          return {
            value: piece,
            movement: "",
          };
        });
        nextScore = gameStateObject.score + score;
        setScore(nextScore);
        space = gameStateObject.newposition;
        if (gameStateObject.position.length) {
          gameStateObject.position.forEach((piece, index) => {
            let anime = space[index];
            while (space[index] < piece) {
              type++;
              space[index]++;
            }
            if (newGamePieces[anime])
              newGamePieces[anime].movement = `left_class${type}`;
            type = 0;
          });
        }
        setGamePieces(newGamePieces);
        break;

      case RIGHT_ARROW:
        gameStateObject = handleSwipeRight(gameState);
        newGrid = gameStateObject.newArray;
        newGamePieces = newGrid.map((piece) => {
          return {
            value: piece,
            movement: "",
          };
        });
        nextScore = gameStateObject.score + score;
        setScore(nextScore);
        space = gameStateObject.newposition;
        if (gameStateObject.position.length) {
          gameStateObject.position.forEach((piece, index) => {
            let anime = space[index];
            while (space[index] > piece) {
              type++;
              space[index]--;
            }
            if (newGamePieces[anime])
              newGamePieces[anime].movement = `right_class${type}`;
            type = 0;
          });
        }
        setGamePieces(newGamePieces);
        break;
      default:
        break;
    }

    // setBest(score >= best ? score : best);
    if (score >= best) {
      setBest(nextScore);
      localStorage.setItem("best", best.toString());
    }
    newGrid = addNumber(newGrid);
    setGameState(newGrid);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEvent("keydown", handleKeyDown);

  const resetGame = () => {
    let emptyGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    emptyGrid = addNumber(emptyGrid);
    emptyGrid = addNumber(emptyGrid);
    setGameState(emptyGrid);
    setScore(0);
    setGameOver(false);
  };

  const isGameOver = () => {
    setDummy(handleSwipeLeft(gameState).newArray);
    if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
      return false;
    }

    setDummy(handleSwipeDown(gameState).newArray);
    if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
      return false;
    }

    setDummy(handleSwipeRight(gameState).newArray);
    if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
      return false;
    }

    setDummy(handleSwipeUp(gameState).newArray);
    if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
      return false;
    }

    return true;
  };

  // const gameSum = gameState.reduce((partialSum, a) => partialSum + a, 0);

  const gameScore = (
    <>
      <Score score={score} type={"score"} />
      <Score score={best} type={"best"} />
    </>
  );

  return (
    <div className={`game ${theme}-theme`}>
      <Header gameScore={gameScore} resetGame={resetGame} />
      {gameOver && <GameOverMessage handleClick={resetGame} />}
      <Board currentState={gamePieces} />
    </div>
  );
};

export default Game;
