// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
//
//   ctx.canvas.width  = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
  //...drawing code...

  // 1= wall
  // 2=path
  // 3=hole
  // 5=ball
let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,5,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,3,1],
  [1,1,1,1,1,1,1,2,2,1,2,1,1,1,1,2,1,1,1,1],
  [1,4,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [1,2,2,2,2,2,1,2,3,1,1,1,2,3,2,1,2,2,2,1],
  [1,1,1,2,1,1,1,1,2,1,2,2,2,2,2,1,2,1,1,1],
  [1,2,2,2,2,3,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
  [1,2,2,3,2,2,2,2,3,2,2,1,1,1,1,1,1,1,2,1],
  [1,2,1,1,1,1,1,1,2,2,2,2,2,2,2,1,2,2,2,1],
  [1,2,2,2,2,2,2,1,2,3,2,2,2,2,2,1,2,1,2,1],
  [1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,1,2,1,1,1],
  [1,1,1,1,1,2,2,1,2,2,2,2,2,2,3,1,2,2,2,1],
  [1,3,2,2,2,2,1,2,2,2,3,2,2,2,2,1,3,2,2,1],
  [1,2,2,2,2,2,1,2,2,1,1,1,1,2,2,1,1,2,2,1],
  [1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,1,1,1,1],
  [1,2,2,1,2,2,1,1,1,1,1,1,2,2,2,2,2,1,2,1],
  [1,2,1,1,2,2,2,2,2,2,2,1,2,1,1,2,2,1,2,1],
  [1,2,2,1,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

let ball = {
  x: 1,
  y: 1
};

let dx = 0;
let dy = 0;
let speed = 500;
function drawMap() {
  let cell = document.getElementById("boardId");
  cell.innerHTML = "";
  for (var j = 0; j < map.length; j++) {
    // console.log(map[j]);
    for (var i = 0; i < map[j].length; i++) {
      // console.log(map[j][i]);
      switch (map[j][i]) {
        case 1:
        cell.innerHTML +=
        "<div class='wall'></div>";
        break;
        case 2:
        cell.innerHTML +=
        "<div class='path'></div>";
        break;
        case 3:
        cell.innerHTML +=
        "<div class='hole'></div>";
        break;
        case 4:
        cell.innerHTML +=
        "<div class='goal'></div>";
        break;
        case 5:
        cell.innerHTML +=
        "<div class='ball'></div>";
        break;

      }
    }
    cell.innerHTML += "<br>";
  }
}

document.onkeydown = function(e){

  switch ( e.keyCode ) {
    // 1= wall
    // 2=path
    // 3=hole
    // 5=ball
    case 37:
    // left
      if (map[ball.y][ball.x - 1] === 2 ) {
        // can't move to wall
          map[ball.y][ball.x] = 2;
          ball.x = ball.x - 1;
          map[ball.y][ball.x] = 5;
          // drawMap();
        // drawMap();

      } else if (map[ball.y][ball.x - 1] === 3) {
        //  ball drop into the hole
        map[1][1] = 5;
        map[ball.y][ball.x] = 2;
        [ball.x, ball.y] = [1,1];
        // drawMap();
        break;
      } else if (map[ball.y][ball.x - 1] === 4) {
        //  ball drop into the hole
        map[1][1] = 5;
        map[ball.y][ball.x] = 2;
        map[ball.y][ball.x - 1] = 2;
        [ball.x, ball.y] = [1,1];
        alert("You Win");
        // drawMap();
        break;
      }
      break;

    case 38:
    // up
    if (map[ball.y - 1][ball.x] === 2) {
      map[ball.y][ball.x] = 2;
      ball.y = ball.y - 1;
      map[ball.y][ball.x] = 5;
      // drawMap();
      break;
    } else if (map[ball.y - 1][ball.x] === 3) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      [ball.x, ball.y] = [1,1];
      // drawMap();
      break;
    } else if (map[ball.y][ball.x - 1] === 4) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      map[ball.y][ball.x - 1] = 2;
      [ball.x, ball.y] = [1,1];
      alert("You Win");
      // drawMap();
      break;
    }
      break;
    case 39:
    // right
    dx += 1;
    if (map[ball.y][ball.x + 1] === 2) {
      map[ball.y][ball.x] = 2;
      ball.x = ball.x + 1;
      map[ball.y][ball.x] = 5;
      // drawMap();
      break;
    } else if (map[ball.y][ball.x + 1] === 3) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      [ball.x, ball.y] = [1,1];
      // drawMap();
      break;
    } else if (map[ball.y][ball.x - 1] === 4) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      map[ball.y][ball.x - 1] = 2;
      [ball.x, ball.y] = [1,1];
      alert("You Win");
      // drawMap();
      break;
    }
      break;
    case 40:
    // down
    if (map[ball.y + 1][ball.x] === 2) {
      map[ball.y][ball.x] = 2;
      ball.y = ball.y + 1;
      map[ball.y][ball.x] = 5;
      // drawMap();
      break;
    } else if (map[ball.y + 1][ball.x] === 3) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      [ball.x, ball.y] = [1,1];
      // drawMap();
      break;
    } else if (map[ball.y][ball.x - 1] === 4) {
      //  ball drop into the hole
      map[1][1] = 5;
      map[ball.y][ball.x] = 2;
      map[ball.y][ball.x - 1] = 2;
      [ball.x, ball.y] = [1,1];
      alert("You Win");
      // drawMap();
      break;
    }
      break;

  }
};

let restartButton = document.getElementById("restart");
restartButton.onclick = function () {
    map[1][1] = 5;
    map[ball.y][ball.x] = 2;
    [ball.x, ball.y] = [1,1];
    map[3][1] = 4;
};
let pauseButton = document.getElementById("pause");
let board = document.getElementById("boardId");
let pauseWindow = document.getElementById("pause-window");
let modal = document.getElementById("modal");

pauseWindow.onclick = function () {
  pauseWindow.style.display = "none";
  modal.style.display = "none";
  board.style.display = "block";
};
pauseButton.onclick = function () {
  pauseWindow.style.display = "flex";
  modal.style.display = "flex";
  board.style.display = "none";
};


// drawMap();
setInterval(drawMap, speed);
