var chessboard = document.getElementById('chessboard');
var space = 1;
for (var row = 0; row < 8; row++) {
  var rowEl = document.createElement('tr');
  for (var cell = 0; cell < 8; cell++) { 
    var cellEl = document.createElement('td');
    cellEl.dataset.position = space;
    rowEl.appendChild(cellEl);
    space++; 
  }
  chessboard.appendChild(rowEl);
}

var initialPieces = [
  { position: 1, color: 'black', type: 'rook' },
  { position: 2, color: 'black', type: 'knight' },
  { position: 3, color: 'black', type: 'bishop' },
  { position: 4, color: 'black', type: 'queen' },
  { position: 5, color: 'black', type: 'king' },
  { position: 6, color: 'black', type: 'bishop' },
  { position: 7, color: 'black', type: 'knight' },
  { position: 8, color: 'black', type: 'rook' },
  { position: 9, color: 'black', type: 'pawn' },
  { position: 10, color: 'black', type: 'pawn' },
  { position: 11, color: 'black', type: 'pawn' },
  { position: 12, color: 'black', type: 'pawn' },
  { position: 13, color: 'black', type: 'pawn' },
  { position: 14, color: 'black', type: 'pawn' },
  { position: 15, color: 'black', type: 'pawn' },
  { position: 16, color: 'black', type: 'pawn' },
  { position: 49, color: 'white', type: 'pawn' },
  { position: 50, color: 'white', type: 'pawn' },
  { position: 51, color: 'white', type: 'pawn' },
  { position: 52, color: 'white', type: 'pawn' },
  { position: 53, color: 'white', type: 'pawn' },
  { position: 54, color: 'white', type: 'pawn' },
  { position: 55, color: 'white', type: 'pawn' },
  { position: 56, color: 'white', type: 'pawn' },
  { position: 57, color: 'white', type: 'rook' },
  { position: 58, color: 'white', type: 'knight' },
  { position: 59, color: 'white', type: 'bishop' },
  { position: 60, color: 'white', type: 'queen' },
  { position: 61, color: 'white', type: 'king' },
  { position: 62, color: 'white', type: 'bishop' },
  { position: 63, color: 'white', type: 'knight' },
  { position: 64, color: 'white', type: 'rook' },
];

function setPieceData (el, color, type) {
  el.className = ''; 
  el.classList.add(color); 
  el.classList.add(type); 
}

function resetBoard () {
  // Clear the board
  var cells = document.querySelectorAll('td');
  cells.forEach(function(cell) {
    cell.className = '';
  });

  initialPieces.forEach(function(piece) {
   
    var pieceEl = document.querySelector('td[data-position="' + piece.position + '"]');
    
    setPieceData(pieceEl, piece.color, piece.type);
  });
};

resetBoard();
