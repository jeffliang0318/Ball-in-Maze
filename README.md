# Ball-in-Maze

![index](https://github.com/jeffliang0318/Ball-in-Maze/blob/master/img/labyrinth-1738039_960_720.jpg)
[Live Demo](https://ball-in-maze.herokuapp.com/index.html)

### Background and Overview

Ball in maze is a game to manipulating the maze board to get the ball towards the goal.

In the javascript version, you can use either mouse or keyboard to play the game.

### Functionality & MVP

In Ball-in-Maze, users will be able to:

- [x] Start, pause, restart
- [ ] Play with mouse or keyboard
- [x] Move up, down, left, right
- [x] Restart the game if ball dropped
- [ ] Hear sounds on ball collisions and drop
- [ ] Can play different maze

In addition, this project will have:

- [x] An modal describe the rules

### Wireframes

![index](https://github.com/jeffliang0318/Ball-in-Maze/blob/master/img/Screen%20Shot%202018-04-15%20at%2011.40.16%20PM.png)

![index](https://github.com/jeffliang0318/Ball-in-Maze/blob/master/img/Screen%20Shot%202018-04-15%20at%2011.39.55%20PM.png)

![index](https://github.com/jeffliang0318/Ball-in-Maze/blob/master/img/Screen%20Shot%202018-04-15%20at%2011.34.04%20PM.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

* JavaScript for overall structure and game logic,
* HTML5 Canvas for DOM manipulation and rendering,
* Web Audio API for sound generation, processing and control. WebAudioAPI allows for simultaneous sounds with more dependable time triggering
* Webpack to bundle and serve up the various scripts.


In addition to the webpack entry file, there will be four scripts involved in this project:

maze.js: this script will handle the logic for creating and updating the necessary DOM elements.

ball.js: this script will house the physics logic for the ball.

audio.js: this script will handle the audio logic and the creation of AudioEvents based on the input parameters outlined above. The programming paradigm will be an audio graph consisting of buffers and processing nodes, all connected into a master bus, and referencing a global AudioContext with its own timeline.

evolutions.js: this lightweight script will house the constructor and update functions for the Evolutions objects.

### Implementation Timeline

Over the weekend:

- [ ] Completed WebAudioAPI Tutorial and loaded basic sound from static assets

Day 1: Initial project setup, including maze and ball.
Setup all necessary Node modules, including getting webpack up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 4 scripts outlined above. Learn the basics of Web Audio API. Goals for the day:

- [x] Get webpack serving files and frame out index.html
- [ ] Learn enough Web Audio to render an object to the Canvas element and create a sound
- [x] Add maze to the page
- [x] Add ball to the page

Day 2: Create the logic backend. Build out modular functions for handling the different events. Goals for the day:

- [x] Have a functional screen on the Canvas frontend that correctly handles creation and running of the simulation.
- [x] Make sure that starting, stopping, and restarting works.

Day 3: Dedicate this day to learning the Web Audio API. First, build out the AudioEvent object to connect to the Maze object. Then, use maze.js to create and render Ball and AudioEvents. Goals for the day:

- [x] Complete the ball.js module (constructor, update functions)
- [ ] Get sounds to play on collisions
- [ ] Build first sound library
- [x] Get collision graphics and physics working(bounce)
- [ ] Make the ball able to be created with mouse. Set vectors on mouse release.

Day 4: Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [x] Create controls for ball move speed, pause, start, restart
- [ ] Add shadow on the maze wall
- [ ] Have a styled Canvas, nice looking controls and title

![index](https://github.com/jeffliang0318/Ball-in-Maze/blob/master/img/shorter_smoother.gif)

###Bonus featurn

There are many directions in which this project could be better.

- [ ] Make ball jumpable

- [ ] Have 3D maze and ball

- [ ] Can play by mobile devise control

- [ ] Make random maze and random hole location
