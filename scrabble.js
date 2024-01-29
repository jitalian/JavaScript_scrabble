import { TilesBag } from "./bag.js";
import { Board } from "./board.js";
import { Rack } from "./rack.js";

window.onload = async function () {
    let board = new Board();
    let tilesBag = new TilesBag();
    console.log(tilesBag.tiles)
    let rack = new Rack(tilesBag);
    board.createBoard();
    rack.createRack();


    // console.log(tilesBag.getTilePoints("J"))
    // console.log(tilesBag.getTilesRemaining())
}

