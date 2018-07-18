
const DIM_MIN = 3,
DIM_MAX = 9;

let board = [],
d = 4; // DxD

let div = document.createElement('div');
div.classList.add('wrap');
document.body.appendChild(div);


makeBoard();
drawBoard();


div.addEventListener('click', function (e) {
  let target = +e.target.textContent;
  let table = document.querySelector('.fifteen');

  if (search(target)) {
    div.removeChild(table);
    drawBoard();
  }
});

function makeBoard() {
  let size = d*d,
  num = size - 1;

  for (let i = 0; i < size; i++) {
    let temp = [];

    for (let j = 0; j < d; j++) {
      temp.push(num);
      num--;
    }
  
    board.push(temp);
  }

  // d - even, swap 1 & 2
  if ( !(size % 2) ) {
    board[d-1][d-2] = 2;
    board[d-1][d-3] = 1;
  }
}

function drawBoard() {
  let fifteen = document.createElement('table');
  fifteen.classList.add('fifteen');
  
  for (let i = 0; i < d; i++) {
    let tr = document.createElement('tr');
  
    for (let j = 0; j < d; j++) {
      let td = document.createElement('td');
  
      if (board[i][j] == 0) {
        td.textContent = '';
        td.style.background = '#cecece';
      } else {
        td.textContent = board[i][j];
      }
  
      tr.appendChild(td);
    }
  
    fifteen.appendChild(tr);
  }

  div.appendChild(fifteen);
}

function search(value) {
  let num = [], empty = [];
  
  for (let i = 0; i < d; i++) {
    for (let j = 0; j < d; j++) {
      if (board[i][j] == value)
        num.push(i, j);
  
      if (board[i][j] == 0)
        empty.push(i, j);
    }
  }
  
  if ( num[0] == empty[0] && (num[1] + 1 == empty[1] || num[1] - 1 == empty  [1]) ) {
    board[empty[0]][empty[1]] = value;
    board[num[0]][num[1]] = 0;
    return true;
  } else if (num[1] == empty[1] && (num[0] + 1 == empty[0] || num[0] - 1 ==   empty[0]) ) {
      board[empty[0]][empty[1]] = value;
      board[num[0]][num[1]] = 0;
      return true;
  } else {
      return false;
  }
}