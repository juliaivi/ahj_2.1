import DrawBorder from './drawBorder';
import moveGoblin from './moveGoblin';

const boardSize = 4;

const board = new DrawBorder();

board.draw();
moveGoblin(boardSize);
setInterval(() => {
  moveGoblin(boardSize);
}, 800);
