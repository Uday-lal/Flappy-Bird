import kaboom from "kaboom";

kaboom();

// Loading the sprites
loadRoot(
  "https://raw.githubusercontent.com/Uday-lal/Flappy-Bird/master/src/sprites/"
);

loadSprite("bird", "bird1.png");
loadSprite("pipe", "pipe.png");
loadSprite("base", "base.png");
loadSprite("bg", "bg.png");

// Adding sprites
add([
  sprite("bg", { width: width(), height: height() }),
  { width: width(), height: height() },
]);

// Add pipe and base
function addPipe() {
  const pipeHeight = 347;
  const pipeGap = 100;
  const offset = Math.round(rand(0, pipeHeight - 200));
  const bottpmPipePos = pipeHeight - 100 + offset;
  const targetPos = bottpmPipePos - pipeGap;
  const topPipePos = targetPos - pipeHeight;
  add([sprite("pipe", { flipY: true }), pos(width(), topPipePos), "pipe"]);
  add([sprite("pipe"), pos(width(), bottpmPipePos), "pipe"]);
}

function addBase(x_pos: number) {
  add([sprite("base"), pos(x_pos, height() - 100), "base"]);
}

add([sprite("bird"), scale(1.5), area()]);

// Rendering pipes
addPipe();

// Rendering the base stripe
let baseXpos = 0;

for (let i = 0; i != Math.round(width() / 150); i++) {
  addBase(baseXpos);
  baseXpos += 335;
}

loop(1.5, () => {
  addPipe();
  addBase(width());
});

// Move components
action("base", (base: any) => {
  base.move(-160, 0);
});

action("pipe", (pipe: any) => {
  pipe.move(-160, 0);
});
