import { RefObject } from "react";
import DefaultMapImage from "../assets/start-valley.png";
import CharacterImage from "../assets/test-sprite.png";
import OverworldMap from "./OverworldMap";
import Player from "./Player";
import DirectionInput from "./DirectionInput";
import { AppDispatch } from "../store";

interface OverworldConfig {
  canvas: RefObject<HTMLCanvasElement>;
  gameContainer: RefObject<HTMLDivElement>;
  dispatch: AppDispatch;
}

class Overworld {
  canvas: RefObject<HTMLCanvasElement>;
  gameContainer: RefObject<HTMLDivElement>;
  ctx: CanvasRenderingContext2D | null;
  map: OverworldMap | null;
  directionInput?: DirectionInput;
  dispatch: AppDispatch;

  constructor(config: OverworldConfig) {
    this.canvas = config.canvas;
    this.gameContainer = config.gameContainer;
    this.ctx = this.canvas.current?.getContext("2d") || null;
    this.map = null;
    this.dispatch = config.dispatch;
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

      const cameraContext = this.map.players.hero;

      this.map.drawImage(
        this.ctx,
        cameraContext,
        this.canvas.current.width,
        this.canvas.current.height
      );
      Object.values(this.map.players).forEach((player) => {
        player.update(this.dispatch, this.directionInput?.currentDirection);
        if (this.ctx && this.canvas.current && this.map)
          player.sprite.draw(
            this.ctx,
            cameraContext,
            this.canvas.current.width,
            this.canvas.current.height,
            this.map.image
          );
      });
      Object.values(this.map.npcs || {}).forEach((object) => {
        if (this.ctx && this.canvas.current && this.map)
          this.ctx &&
            object.sprite.draw(
              this.ctx,
              cameraContext,
              this.canvas.current.width,
              this.canvas.current.height,
              this.map.image
            );
      });

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  resizeCanvas() {
    if (this.canvas.current && this.gameContainer.current) {
      this.canvas.current.width = this.gameContainer.current.clientWidth - 420;
      this.canvas.current.height = this.gameContainer.current.clientHeight;
    }
  }

  init() {
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas.call(this));
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
