import { Component, OnInit } from '@angular/core';

interface Piece {
  color: 'red' | 'yellow' | 'green' | 'blue';
  x: number;
  y: number;
}

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})



export class BoardComponent implements OnInit{
  gridSize = 6;
  pieces: Piece[] = [];
  selectedPiece: Piece | null = null;

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.pieces = [
      { color: 'red', x: 0, y: 0 },
      { color: 'red', x: 2, y: 4 },
      { color: 'yellow', x: 4, y: 0 },
      { color: 'yellow', x: 4, y: 4 },
      { color: 'green', x: 4, y: 1 },
      { color: 'green', x: 2, y: 1 },
      { color: 'blue', x: 3, y: 5 },
      { color: 'blue', x: 3, y: 2 },
    ];
  }

  onCellClick(x: number, y: number): void {
    const piece = this.pieces.find(p => p.x === x && p.y === y);
    if (piece) {
      this.selectedPiece = piece;
    } else if (this.selectedPiece) {
      this.selectedPiece.x = x;
      this.selectedPiece.y = y;
      this.selectedPiece = null;
    }
  }

  isPieceAt(x: number, y: number): Piece | undefined {
    return this.pieces.find(p => p.x === x && p.y === y);
  }

  isEven(n: number): boolean {
    return n % 2 === 0;
  }
}
