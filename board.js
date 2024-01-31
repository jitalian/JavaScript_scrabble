import { computerPlayer } from "./computer.js";

export class Board {

    constructor(computer, rack) {
        this.computer = computer;
        this.rack = rack;
    }

    triple_word_squares = new Set([[0, 0], [0, 7], [0, 14], [7, 0], [7, 14], [14, 0], [14, 7], [14, 14]]);

    triple_letter_squares = new Set([[1, 5], [1, 9], [5, 1], [5, 5], [5, 9], [5, 13], [9, 1], [9, 5], [9, 9], [9, 13], [13, 5], [13, 9]]);

    double_letter_squares = new Set([[0, 3], [0, 11], [2, 6], [2, 8], [3, 0], [3, 7], [3, 14], [6, 2], [6, 6], [6, 8], [6, 12], [7, 3], [7, 11], [8, 2], [8, 6], [8, 8], [8, 12], [11, 0], [11, 7], [11, 14], [12, 6], [12, 8], [14, 3], [14, 11]]);

    double_word_squares = new Set([[1, 1], [1, 13], [2, 2], [2, 12], [3, 3], [3, 11], [4, 4], [4, 10], [10, 4], [10, 10], [11, 3], [11, 11], [12, 2], [12, 12], [13, 1], [13, 13]]);

    start = [7, 7];

    moved_tiles = [];
    computerTurn = false;

    boardLetterValues = Array(15).fill().map(() => Array(15).fill("_"));
    activeTiles = Array(15).fill().map(() => Array(15).fill(false));
    bonusMatrix = Array(15).fill().map(() => Array(15).fill("_"));


    createBoard() {

        this.activeTiles[7][7] = true;

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

                //This drop event moves tile to cell on board temporarily and removed it from the rack. Once the player submits their word and it is validated, setTile() is called to permanently update board and draw new tiles.
                cell.addEventListener('drop', (event) => this.placeTile(event, cell))
            }
        }

        //Update bonus matrix and html elements for each type of bonus.
        for (let tile of this.triple_word_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('triple-word');
            cell.innerText = "TW"
            this.bonusMatrix[tile[0]][tile[1]] = "TW";
        }
        for (let tile of this.triple_letter_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('triple-letter');
            cell.innerText = "TL"
            this.bonusMatrix[tile[0]][tile[1]] = "TL";
        }

        for (let tile of this.double_word_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('double-word');
            cell.innerText = "DW"
            this.bonusMatrix[tile[0]][tile[1]] = "DW";
        }
        for (let tile of this.double_letter_squares) {
            let cell = document.getElementById(`${tile[0]}-${tile[1]}`);
            cell.classList.add('double-letter');
            cell.innerText = "DL"
            this.bonusMatrix[tile[0]][tile[1]] = "DL";
        }

        let cell = document.getElementById(`${this.start[0]}-${this.start[1]}`);
        cell.classList.add('double-word');
        cell.innerText = "Start";
        cell.style.fontSize = "1.4rem";
        this.bonusMatrix[7][7] = "Start";

        let submit = document.getElementById('submit');
        submit.addEventListener('click', (event) => {
            // console.log(this.rack.currentWord);
            // console.log(this.checkFirstMovePlacement(this.rack.currentWord))
            // this.boardLetterValues[7][8] = "A";
            console.log(this.validateWord(this.rack.currentWord));
            this.computer.computerTurn();
        })
    }

    placeTile(event, location) {
        event.preventDefault();
        let changedCell = document.getElementById(location.id);
        changedCell.style.fontSize = 0;
        let draggableElement = document.getElementById(event.dataTransfer.getData("text"));
        changedCell.appendChild(draggableElement)

        this.rack.currentWord.push([location.id, draggableElement.id, draggableElement.textContent[0]]);

        // for (let elem of this.rack.currentWord) {
        //     console.log(elem);
        // }
        // changedCell.classList.add('placed-tile');

        // let letter = document.createElement('span');
        // let points = document.createElement('span');

        // letter.classList.add('letter');
        // points.classList.add('letter-score');

        // letter.innerText = event.dataTransfer.getData("text")[0];
        // points.innerText = event.dataTransfer.getData("text").slice(2);

        // changedCell.appendChild(letter);
        // changedCell.appendChild(points);

        // let location_coords = changedCell.id.split("-");
        // this.moved_tiles.push([location_coords[0], location_coords[1]])
        // console.log(this.moved_tiles)
    }

    validateWord(word) {
        if (word.length === 0) return false
        for (let letter of word) {
            let location = letter[0].split('-');
            if (this.boardLetterValues[parseInt(location[0])][parseInt(location[1])] !== "_")
                return false
        }
        if (!this.checkActiveTilePlacement(word))
            return false

        return true
    }
    checkActiveTilePlacement(word) {
        for (let letter of word) {
            let location = letter[0].split('-');
            if (this.activeTiles[parseInt(location[0])][parseInt(location[1])] === true)
                return true
        }
        return false;
    }

    updateBoard() { }
}