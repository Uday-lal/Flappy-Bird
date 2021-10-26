import kaboom from "kaboom";

kaboom();

// Loading the sprites
loadRoot(
  "https://raw.githubusercontent.com/Uday-lal/Flappy-Bird/master/src/sprites/"
);

loadSprite("bg", "bg.png");
add([sprite("bg"), scale(4.8, 1.5), { width: width(), height: height() }]);
