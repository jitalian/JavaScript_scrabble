import { Board } from "./board.js";

window.onload = async function () {
    let board = new Board();
    board.createBoard();
}

const tile = document.getElementById('tile-one');


tile.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData("text", event.target.innerText);
})