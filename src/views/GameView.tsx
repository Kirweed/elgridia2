import { useEffect, useRef } from "react";
import Header from "../components/common/Header";
import GameCanvas from "../components/GameCanvas";
import GameContainer from "../components/GameContainer";
import RightGameSidebar from "../components/RightGameSidebar";
import Overworld from "../engine/Overworld";

const GameView = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const overworld = new Overworld({ canvas });
    overworld.init();
  }, [canvas]);
  return (
    <>
      <Header />
      <GameContainer>
        <GameCanvas width="1024" height="512" ref={canvas} />
        <RightGameSidebar />
      </GameContainer>
    </>
  );
};

export default GameView;
