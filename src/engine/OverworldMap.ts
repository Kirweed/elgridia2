import GameObject from "./GameObject";

interface OverworldMapConfig {
  gameObjects: Record<string, GameObject>;
  src: string;
}

class OverworldMap {
  gameObjects: Record<string, GameObject>;
  image: HTMLImageElement;

  constructor(config: OverworldMapConfig) {
    this.gameObjects = config.gameObjects;
    this.image = new Image();
    this.image.src = config.src;
  }

  drawImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, 0, 0);
  }
}

export default OverworldMap;
