/* exported setup, draw */
let seed = 143;

let landColor = "#3d023a";
let skyColor = "#cdd8e6";
let hillColor = "#1e273f";
let buildColor = "#ff4800";
let oceanColor = "#0b254a";
let sunColor = "#e3d409";

let value = 0;

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(skyColor);
  rect(0, 0, width, height * 2 / 3);

  fill(sunColor);
  ellipse(650, mouseY, 100, 100);

  fill(oceanColor);
  rect(0, height * 2 / 3, width, height / 3);

  // draw skyline
  fill(landColor);
  beginShape();
  vertex(0, height * 2 / 3);
  const numBuild = 10;
  for (let i = 0; i < numBuild; i++) {
    let x = (width / 2 * i) / numBuild;
    let y = height * 2 / 3 - (random() * random() * random() * height) / 8 - height / 70;
    vertex(x, y)
  }
  vertex(width / 2, height * 2 / 3);
  endShape(CLOSE);

  const build = 6 * random();
  for (let i = 0; i < build; i++) {
    addBuilding();
  }
  
  function addBuilding() {
    let x = width / 2 * (random()) - 50;
    let h = int(random(30, 75));
    let y = height * 2 / 3 - h;
    let w = int(random(15, 35));
    

    fill(buildColor);
    rect(x, y, w, h);

  }

  if (mouseY < height / 2) {
    landColor = "#184505";
    buildColor = "#ff4800";
    oceanColor = "#0b254a";
    skyColor = "#cdd8e6";
  } else if (mouseY < height * 2 / 3) {
    landColor = "#545017";
    buildColor = "#993d0b";
    oceanColor = "#104b52";
    skyColor = "#f5853b";
  } else if (mouseY < height * 3 / 4 + 17) {
    landColor = "#142e09";
    buildColor = "#471b06";
    oceanColor = "#290340";
    skyColor = "#a31847";
  } else {
    landColor = "#3d023a";
    buildColor = "#2b0129";
    oceanColor = "#000000";
    skyColor = "#2d3233";
  }


}

