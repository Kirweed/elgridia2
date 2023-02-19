import { RefObject } from "react";
import DefaultMapImage from "../assets/mapa-startowa-z-siatka.png";
import CharacterImage from "../assets/hero.png";
import OverworldMap from "./OverworldMap";
import Player from "./Player";
import DirectionInput from "./DirectionInput";

interface OverworldConfig {
  canvas: RefObject<HTMLCanvasElement>;
}

class Overworld {
  canvas: RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | null;
  map: OverworldMap | null;
  directionInput?: DirectionInput;

  constructor(config: OverworldConfig) {
    this.canvas = config.canvas;
    this.ctx = this.canvas.current?.getContext("2d") || null;
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      if (!this.ctx || !this.canvas.current || !this.map) return;

      this.ctx.clearRect(
        0,
        0,
        this.canvas.current.width,
        this.canvas.current.height
      );

      this.map.drawImage(this.ctx);
      Object.values(this.map.players).forEach((player) => {
        player.update(this.directionInput?.currentDirection);
        this.ctx && player.sprite.draw(this.ctx);
      });
      Object.values(this.map.npcs || {}).forEach((object) => {
        this.ctx && object.sprite.draw(this.ctx);
      });

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    const hero = new Player({
      x: 5 * 32,
      y: 5 * 32,
      src: CharacterImage,
    });
    this.map = new OverworldMap({
      src: DefaultMapImage,
      players: { hero },
    });

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}

export default Overworld;
