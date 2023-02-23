import { useEffect, useRef } from "react";
import GameCanvas from "../components/GameCanvas";
import GameContainer from "../components/GameContainer";
import LeftGameSidebar from "../components/LeftGameSidebar";
import LocationInfoBar from "../components/LocationInfoBar";
import RightGameSidebar from "../components/RightGameSidebar";
import TopCanvasOverlay from "../components/TopCanvasOverlay";
import Overworld from "../engine/Overworld";
import { useAppDispatch } from "../store";
import { usePlayerSelector } from "../store/hooks";

const GameView = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const gameContainer = useRef<HTMLDivElement>(null);
  const player = usePlayerSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const overworld = new Overworld({ canvas, gameContainer, dispatch });
    overworld.init();
  }, [canvas]);
  return (
    <>
      <GameContainer ref={gameContainer}>
        <TopCanvasOverlay />
        <LocationInfoBar x={player.x} y={player.y} />
        <LeftGameSidebar />
        <GameCanvas width="1024" height="512" ref={canvas} />
        <RightGameSidebar />
      </GameContainer>
    </>
  );
};

export default GameView;
