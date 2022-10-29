const CHARACHTER_STATE_NAMES = {
  idle: "idle",
  fall: "fall",
  jump: "jump",
  run: "run",
  dizzy: "dizzy",
  sit: "sit",
  roll: "roll",
  bite: "bite",
  ko: "ko",
  getHit: "getHit"
}

const ANIMATIONS_STATES = [
  {
    name: CHARACHTER_STATE_NAMES.idle,
    frames: 7
  },
  {
    name: CHARACHTER_STATE_NAMES.jump,
    frames: 7,
  },
  {
    name: CHARACHTER_STATE_NAMES.fall,
    frames: 9,
  },
  {
    name: CHARACHTER_STATE_NAMES.run,
    frames: 7,
  },
  {
    name: CHARACHTER_STATE_NAMES.dizzy,
    frames: 11,
  },
  {
    name: CHARACHTER_STATE_NAMES.sit,
    frames: 5,
  },
  {
    name: CHARACHTER_STATE_NAMES.roll,
    frames: 7,
  },
  {
    name: CHARACHTER_STATE_NAMES.bite,
    frames: 7,
  },
  {
    name: CHARACHTER_STATE_NAMES.ko,
    frames: 12,
  },
  {
    name: CHARACHTER_STATE_NAMES.getHit,
    frames: 4,
  },
]


const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

const SPRITE_ANIMATIONS = [];

ANIMATIONS_STATES.forEach((state, i) => {
  let frames = {
    loc: [],
  }

  for(let j = 0; j < state.frames; j++){
    let positionX = j * SPRITE_WIDTH;
    let positionY = i * SPRITE_HEIGHT;

    frames.loc.push({x: positionX, y: positionY})
  }

  SPRITE_ANIMATIONS[state.name] = frames;

});

export { SPRITE_ANIMATIONS, SPRITE_WIDTH, SPRITE_HEIGHT, CHARACHTER_STATE_NAMES }