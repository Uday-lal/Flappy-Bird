import kaboom from "kaboom";

kaboom();

// Loading the sprites
loadRoot(
  "https://raw.githubusercontent.com/Uday-lal/Flappy-Bird/master/src/sprites/"
);

loadSprite("pipe", "pipe.png");
loadSprite("base", "base.png");
loadSprite("bg", "bg.png");

// Adding sprites
add([sprite("bg"), scale(4.8, 1.5), { width: width(), height: height() }]);

// Add pipe and base
function addPipe() {
  add([sprite("pipe"), pos(width(), height() - 400), "pipe"]);
}

function addBase(x_pos: number) {
  add([sprite("base"), pos(x_pos, height() - 100), "base"]);
}
// Rendering the pipes
addPipe();

// Rendering the base stripe
let baseXpos = 0;

for (let i = 0; i != Math.round(width() / 150); i++) {
  addBase(baseXpos);
  baseXpos += 335;
}

loop(1.5, () => {
  addBase(width());
});

// Move components
action("base", (base: any) => {
  base.move(-160, 0);
});

action("pipe", (pipe: any) => {
  pipe.move(-160, 0);
});
