class Coin {
  constructor(topPx, leftPx) {
    return {
      filename: "coin_2.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "70px",
      points: 1,
      whatYouveFound: "a coin"
    };
  }
}

class Diamond {
  constructor(topPx, leftPx) {
    return {
      filename: "diamond5.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "90px",
      points: 10,
      whatYouveFound: "a diamond"
    };
  }
}

class Goblet {
  constructor(topPx, leftPx) {
    return {
      filename: "goblet.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "140px",
      points: 100,
      whatYouveFound: "a goblet"
    };
  }
}

class TreasureChest {
  constructor(topPx, leftPx) {
    return {
      filename: "treasure_chest.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "100px",
      points: 1000,
      whatYouveFound: "a treasure chest"
    };
  }
}

class Utah {
  constructor(topPx, leftPx) {
    return {
      filename: "utah.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "120px",
      points: 300,
      whatYouveFound: "Utah"
    };
  }
}

/*
  Medieval layout pieces
*/

class Skeleton {
  constructor(topPx, leftPx) {
    return {
      filename: "skeleton.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "70px",
      points: 1,
      whatYouveFound: "a skeleton"
    };
  }
}

class Knight {
  constructor(topPx, leftPx) {
    return {
      filename: "knight.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "70px",
      points: 5,
      whatYouveFound: "a knight"
    };
  }
}

class Horse {
  constructor(topPx, leftPx) {
    return {
      filename: "horse.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "100px",
      points: 20,
      whatYouveFound: "a horse"
    };
  }
}

class Crown {
  constructor(topPx, leftPx) {
    return {
      filename: "crown.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "80px",
      points: 100,
      whatYouveFound: "a crown"
    };
  }
}

class Dragon {
  constructor(topPx, leftPx) {
    return {
      filename: "dragon.png",
      top: `${topPx}px`,
      left: `${leftPx}px`,
      width: "150px",
      points: 5000,
      whatYouveFound: "a dragon"
    };
  }
}

const layouts = [
  [
    new Coin(40, 30),
    new Coin(400, 300),
    new Coin(264, 800),
    new Coin(500, 300),
    new Coin(464, 800),
    new Coin(400, 1200),
    new Coin(300, 1200),
    new Coin(500, 1164),
    new Coin(500, 164),
    new Diamond(350, 19),
    new Diamond(20, 200),
    new Diamond(150, 1100),
    new Goblet(60, 700),
    new TreasureChest(400, 700),
    new Utah(0, 1200),
  ],
  [
    new Skeleton(125, 40),
    new Skeleton(325, 400),
    new Skeleton(0, 200),
    new Skeleton(400, 1000),
    new Skeleton(500, 1300),
    new Skeleton(170, 1290),
    new Skeleton(65, 1150),
    new Skeleton(225, 900),
    new Knight(100, 400),
    new Knight(300, 1125),
    new Knight(0, 1000),
    new Knight(50, 900),
    new Knight(20, 800),
    new Horse(300, 60),
    new Horse(325, 700),
    new Crown(225, 200),
    new Crown(45, 1300),
    new Dragon(0, 0),
  ]
];

function startNewGame() {
  // remove any existing objects from a previous game
  const objectsContainer = document.getElementById("objects-container");
  objectsContainer.innerHTML = "";
  const pointsNode = document.getElementById("points");
  pointsNode.innerHTML = "Points: 0";
  const foundSomethingNode = document.getElementById("found-something");
  foundSomethingNode.innerHTML = "";

  const randomLayoutIndex = Math.floor(Math.random() * layouts.length);
  const randomLayout = layouts[randomLayoutIndex];

  for (let item of randomLayout) {
    const { filename, top, left, width, points, whatYouveFound } = item;
    const objectNode = document.createElement("img");
    objectNode.classList.add("object-to-find");
    objectNode.classList.add("cursor-enabled");
    objectNode.src = `assets/${filename}`;
    objectNode.style.top = top;
    objectNode.style.left = left;
    if (width) {
      objectNode.style.width = width;
    }
    objectNode.onclick = function(event) {
      event.preventDefault();
      event.stopPropagation();
      objectNode.style.opacity = 1;
      objectNode.classList.remove("cursor-enabled");
      objectNode.onclick = null;

      const currentTotalPoints = pointsNode.innerHTML.match(/\d+/)[0];
      const newTotalPoints = Number(currentTotalPoints) + points;
      pointsNode.innerHTML = `Point${newTotalPoints == 1 ? '' : 's'}: ${newTotalPoints}`;
      foundSomethingNode.innerHTML = `You found ${whatYouveFound}!`;
    }
    objectsContainer.appendChild(objectNode);
  }
}

window.onload = function() {
  document.getElementById("new-game-button").onclick = startNewGame;
  startNewGame();

  setTimeout(function() {
    const hint1Node = document.getElementById("hint-1");
    hint1Node.style.display = "block";
    hint1Node.onclick = function () {
      hint1Node.remove();
    }
  }, 10 * 1000);

  setTimeout(function() {
    const hint2Node = document.getElementById("hint-2");
    hint2Node.style.display = "block";
    hint2Node.onclick = function() {
      hint2Node.remove();
    }
  }, 30 * 1000);
}
