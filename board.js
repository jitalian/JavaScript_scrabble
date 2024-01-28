export class Board {
    triple_word_squares = new Set([[0, 0], [0, 7], [0, 14], [7, 0], [7, 14], [14, 0], [14, 7], [14, 14]]);

    triple_letter_squares = new Set([[1, 5], [1, 9], [5, 1], [5, 5], [5, 9], [5, 13], [9, 1], [9, 5], [9, 9], [9, 13], [13, 5], [13, 9]]);

    double_letter_squares = new Set([[0, 3], [0, 11], [2, 6], [2, 8], [3, 0], [3, 7], [3, 14], [6, 2], [6, 6], [6, 8], [6, 12], [7, 3], [7, 11], [8, 2], [8, 6], [8, 8], [8, 12], [11, 0], [11, 7], [11, 14], [12, 6], [12, 8], [14, 3], [14, 11]]);

    double_word_squares = new Set([[1, 1], [1, 13], [2, 2], [2, 12], [3, 3], [3, 11], [4, 4], [4, 10], [10, 4], [10, 10], [11, 3], [11, 11], [12, 2], [12, 12], [13, 1], [13, 13]]);

    start = [7, 7];

    letter_values = this.initializeLetterValues();

    createBoard() {
        let board = document.querySelector('.board');
        board.style.gridTemplateColumns = "1fr ".repeat(15)
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell')
                cell.id = `${i}-${j}`;
                board.appendChild(cell);
                cell.addEventListener('dragover', function (event) {
                    event.preventDefault();
                })
                cell.addEventListener('drop', function (event) {
                    console.log(cell.id);
                    event.preventDefault();
                    let changedCell = document.getElementById(cell.id);
                    changedCell.innerText = event.dataTransfer.getData("text")

                })
            }
        }
        for (let tile of this.triple_word_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('triple-word');
            cell.innerText = "TW"
        }
        for (let tile of this.triple_letter_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('triple-letter');
            cell.innerText = "TL"
        }

        for (let tile of this.double_word_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('double-word');
            cell.innerText = "DW"
        }
        for (let tile of this.double_letter_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('double-letter');
            cell.innerText = "DL"
        }

        let cell = document.getElementById(`${this.start[0]}-${this.start[1]}`);
        cell.classList.add('double-word');
        cell.innerText = "*";

        console.log(this.letter_values)

    }

    initializeLetterValues() {
        let array = [];
        for (let i = 0; i < 15; i++) {
            let row = [];
            for (let j = 0; j < 15; j++) {
                row.push("-");
            }
            array.push(row);
        }
        return array;
    }
}