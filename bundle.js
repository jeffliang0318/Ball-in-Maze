/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
var map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 5, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1], [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1], [1, 4, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1], [1, 2, 2, 2, 2, 2, 1, 2, 3, 1, 1, 1, 2, 3, 2, 1, 2, 2, 2, 1], [1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1], [1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1], [1, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1], [1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1], [1, 2, 2, 2, 2, 2, 2, 1, 2, 3, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1], [1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1], [1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1], [1, 3, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 2, 1, 3, 2, 2, 1], [1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1], [1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1], [1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1], [1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1], [1, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var ball = {
  x: 1,
  y: 1
};

var dx = 0;
var dy = 0;
var speed = 1;
function drawMap() {
  var cell = document.getElementById("boardId");
  cell.innerHTML = "";
  for (var j = 0; j < map.length; j++) {
    // console.log(map[j]);
    for (var i = 0; i < map[j].length; i++) {
      // console.log(map[j][i]);
      switch (map[j][i]) {
        case 1:
          cell.innerHTML += "<div class='wall'></div>";
          break;
        case 2:
          cell.innerHTML += "<div class='path'></div>";
          break;
        case 3:
          cell.innerHTML += "<div class='hole'></div>";
          break;
        case 4:
          cell.innerHTML += "<div class='goal'></div>";
          break;
        case 5:
          cell.innerHTML += "<div class='ball'></div>";
          break;

      }
    }
    cell.innerHTML += "<br>";
  }
}

document.onkeydown = function (e) {

  switch (e.keyCode) {
    // 1= wall
    // 2=path
    // 3=hole
    // 5=ball
    case 37:
      // left
      if (map[ball.y][ball.x - 1] === 2) {
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

        // drawMap();
        var _ref = [1, 1];
        ball.x = _ref[0];
        ball.y = _ref[1];
        break;
      } else if (map[ball.y][ball.x - 1] === 4) {
        //  ball drop into the hole
        map[1][1] = 5;
        map[ball.y][ball.x] = 2;
        map[ball.y][ball.x - 1] = 2;

        // drawMap();
        var _ref2 = [1, 1];
        ball.x = _ref2[0];
        ball.y = _ref2[1];
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

        // drawMap();
        var _ref3 = [1, 1];
        ball.x = _ref3[0];
        ball.y = _ref3[1];
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

        // drawMap();
        var _ref4 = [1, 1];
        ball.x = _ref4[0];
        ball.y = _ref4[1];
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

        // drawMap();
        var _ref5 = [1, 1];
        ball.x = _ref5[0];
        ball.y = _ref5[1];
        break;
      }
      break;

  }
};

var restartButton = document.getElementById("restart");
restartButton.onclick = function () {
  map[1][1] = 5;
  map[ball.y][ball.x] = 2;
  map[ball.y][ball.x - 1] = 2;
  var _ref6 = [1, 1];
  ball.x = _ref6[0];
  ball.y = _ref6[1];
};
var pauseButton = document.getElementById("pause");
var board = document.getElementById("game-board");
pauseButton.onclick = function () {
  board.innerHTML += "<div class='pause' id='pause-modal'><div class='pause-window'><h2>Pause</h2></div></div>";
};
// drawMap();
setInterval(drawMap, speed);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map