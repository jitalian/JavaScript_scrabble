import { TilesBag } from "./bag.js";
import { Board } from "./board.js";
import { Rack } from "./rack.js";
import { Trie } from "./words.js";
import { computerPlayer } from "./computer.js";

window.onload = async function () {


    let tilesBag = new TilesBag();
    let rack = new Rack(tilesBag);
    let computer = new computerPlayer();
    let board = new Board(computer, rack);


    board.createBoard();
    rack.createRack();

    // let url = 'https://raw.githubusercontent.com/jitalian/scrabble/master/word_list.txt'
    // let url = 'https://raw.githubusercontent.com/jitalian/scrabble/master/blanks_dict.txt'
    // const response = await fetch(url);
    // const words = await response.text();

    // Short array for testing
    let words = ['"hi"', '"how"', '"is"', '"the"', '"be"', '"went"', '"there"', '"aardvark"', '"encyclopedia"', '"justin"'];


    let dictionary = new Trie(words);


    // console.log(dictionary.findWord(''))
    // console.log(dictionary.findWord('not'))
    // console.log(dictionary.findPrefix('justi'))
    // console.log(dictionary.findWord('justin'))
    // console.log(tilesBag.getTilePoints("J"))
    // console.log(tilesBag.getTilesRemaining())


}


