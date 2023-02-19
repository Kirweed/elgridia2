import GameObject from "./GameObject";
import Player from "./Player";

interface OverworldMapConfig {
  npcs?: Record<string, GameObject>;
  players: Record<string, Player>;
  src: string;
}

class OverworldMap {
  npcs?: Record<string, GameObject>;
  players: Record<string, Player>;
  image: HTMLImageElement;

  constructor(config: OverworldMapConfig) {
    this.npcs = config.npcs;
    this.players = config.players;
    this.image = new Image();
    this.image.src = config.src;
  }

  drawImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, 0, 0);
  }
}

export default OverworldMap;
