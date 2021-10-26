import kaboom from "kaboom";

kaboom();

// Loading the sprites
loadRoot(
  "https://raw.githubusercontent.com/Uday-lal/Flappy-Bird/master/src/sprites/"
);

loadSprite("base", "base.png");
loadSprite("bg", "bg.png");

// Adding sprites
add([sprite("bg"), scale(4.8, 1.5), { width: width(), height: height() }]);
function produceBase(x_pos: number) {
  add([sprite("base"), pos(x_pos, height() - 100), "base"]);
}

let baseXpos = 0;

for (let i = 0; i != Math.round(width() / 150); i++) {
  produceBase(baseXpos);
  baseXpos += 335;
}

loop(1.5, () => {
  produceBase(width());
});

action("base", (base: any) => {
  base.move(-160, 0);
});
