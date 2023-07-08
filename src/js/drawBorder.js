export default class DrawBorder {
  constructor() {
    this.boardSize = 4;
    this.container = null;
  }

  draw() {
    this.container = document.getElementById('game-container');
    const text = `
            <h1 class="title">Слови гоблина</h1>
            <div data-id="board" class="board"> </div>
        `;
    this.container.insertAdjacentHTML('beforeend', text);
    this.board = document.querySelector('.board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.id = i;
      this.board.append(cell);
    }
  }
}
