import { TilesBag } from "./bag.js";
import { Board } from "./board.js";
import { Rack } from "./rack.js";
import { Trie } from "./words.js";

window.onload = async function () {
    let board = new Board();
    let tilesBag = new TilesBag();
    console.log(tilesBag.tiles)
    let rack = new Rack(tilesBag);
    board.createBoard();
    rack.createRack();

    // let url = 'https://raw.githubusercontent.com/jitalian/scrabble/master/word_list.txt'
    // const response = await fetch(url);
    // const words = await response.text();

    // Short array for testing
    let words = ['"hi"', '"how"', '"is"', '"the"', '"be"', '"went"', '"there"', '"aardvark"', '"encyclopedia"', '"justin"'];
    let dictionary = new Trie(words);


    console.log(dictionary.findWord('his'))
    console.log(dictionary.findWord('not'))
    console.log(dictionary.findPrefix('justi'))
    console.log(dictionary.findWord('justin'))



    // console.log(tilesBag.getTilePoints("J"))
    // console.log(tilesBag.getTilesRemaining())
}

