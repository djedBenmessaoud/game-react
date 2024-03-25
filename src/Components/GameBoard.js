import React, { useEffect } from "react";
import '../Game.css';
import GameCircle from "./GameCircle";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner ,getComputerMove} from "./helper";
import { GAME_STATE_PLAYING,PLAYER_1,PLAYER_2,NO_PLAYER,NO_CIRCLES,GAME_STATE_WIN, GAME_STATE_DRAW  } from "../Constants";









const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const[gameState,setGameState]=useState(GAME_STATE_PLAYING);

  const[winPlayer,setWinPlayer]=useState(NO_PLAYER);

    console.log(gameBoard);



    const suggestMove=()=>{
      circleClicked(getComputerMove(gameBoard));


    }

  useEffect(()=>{
    initGame();
  },[])


const initGame=()=>{
  console.log('game init');

  setGameBoard(Array(16).fill(NO_PLAYER));
  setCurrentPlayer(PLAYER_1);
  setGameState(GAME_STATE_PLAYING);
}





  const circleClicked = (id) => {
    console.log('circle clicked : ' + id);

    if (gameBoard[id]!==NO_PLAYER || gameState!==GAME_STATE_PLAYING) {
      return;
    }


    if (isWinner(gameBoard, id, currentPlayer)) {

      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {

      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
    }


    //  const board=[...gameBoard];
    //board[id]=currentPlayer;
    //setGameBoard(board);

    setGameBoard(prev => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      })
    })

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);

  }

  const initBoard = () => {
    const circles = [];
    for (let index = 0; index < NO_CIRCLES; index++) {
      circles.push(renderCircle(index));
    }
    return circles;
  }

  const renderCircle = id => {
    return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />

  }

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
      <div className="GameBoard" >
        {initBoard()}
      </div>
      <Footer onNewGameClickEvent={initGame}  onSuggestClickEvent={suggestMove} gameState={gameState }/>
    </>
  )
}
export default GameBoard;