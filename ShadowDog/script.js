import { SPRITE_ANIMATIONS, SPRITE_WIDTH, SPRITE_HEIGHT, CHARACHTER_STATE_NAMES } from "./scripts/constants.js"
import { streamSelect } from "./scripts/events.js";
import { Observer } from "./scripts/observe.js";
import { renderSelect } from "./scripts/render.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "public/shadow_dog.png";

const startCharacterAnimate = (name) => {
  let frameX = 0;
  let frameY = 0;
  let gameFrame = 0;
  const STAGGER_FRAMES = 5;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = 
      Math.floor(gameFrame / STAGGER_FRAMES) % SPRITE_ANIMATIONS[name].loc.length;

    frameX = SPRITE_WIDTH * position;
    frameY = SPRITE_ANIMATIONS[name].loc[position].y

    ctx.drawImage(playerImage, frameX, frameY, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);
  }

  animate()
}


//View
renderSelect("animations", "animations", Object.keys(CHARACHTER_STATE_NAMES), true)

const obs = new Observer(CHARACHTER_STATE_NAMES.run)
streamSelect.watch(obs);
console.log(obs)

startCharacterAnimate(obs.state)
