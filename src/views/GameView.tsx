import { useEffect, useRef } from "react";
import GameCanvas from "../components/GameCanvas";
import GameContainer from "../components/GameContainer";
import LeftGameSidebar from "../components/LeftGameSidebar";
import RightGameSidebar from "../components/RightGameSidebar";
import Overworld from "../engine/Overworld";

const GameView = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const gameContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overworld = new Overworld({ canvas, gameContainer });
    overworld.init();
  }, [canvas]);
  return (
    <>
      <GameContainer ref={gameContainer}>
        <LeftGameSidebar />
        <GameCanvas width="1024" height="512" ref={canvas} />
        <RightGameSidebar />
      </GameContainer>
    </>
  );
};

export default GameView;
