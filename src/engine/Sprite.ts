interface GameObjectForSprite {
  x: number;
  y: number;
}

interface SpriteConfig {
  animations?: any;
  currentAnimation?: string;
  src: string;
  gameObject: GameObjectForSprite;
  animationFrameLimit?: number;
}

class Sprite {
  animations: any;
  currentAnimation: string;
  currentAnimationFrame: number;
  image: HTMLImageElement;
  isLoaded: boolean;
  gameObject: GameObjectForSprite;
  animationFrameLimit: number;
  animationFrameProgress: number;

  constructor(config: SpriteConfig) {
    this.isLoaded = false;

    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
    };
    this.currentAnimation = "idle-down" || config.currentAnimation;
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;

    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  udpateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress--;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame++;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  setAnimation(key: string) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x;
    const y = this.gameObject.y - 16;

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 48);

    this.udpateAnimationProgress();
  }
}

export default Sprite;
