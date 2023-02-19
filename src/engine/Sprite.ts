interface GameObjectForSprite {
  x: number;
  y: number;
}

interface SpriteConfig {
  animations?: any;
  currentAnimation?: string;
  src: string;
  gameObject: GameObjectForSprite;
}

class Sprite {
  animations: any;
  currentAnimation: string;
  currentAnimationFrame: number;
  image: HTMLImageElement;
  isLoaded: boolean;
  gameObject: GameObjectForSprite;

  constructor(config: SpriteConfig) {
    this.isLoaded = false;

    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = "idleDown" || config.currentAnimation;
    this.currentAnimationFrame = 0;

    this.gameObject = config.gameObject;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x;
    const y = this.gameObject.y - 16;

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 48);
  }
}

export default Sprite;
