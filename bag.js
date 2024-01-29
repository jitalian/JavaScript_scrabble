export class TilesBag {
    tiles = Array(9).fill("A").concat(
        Array(2).fill("B"),
        Array(2).fill("C"),
        Array(4).fill("D"),
        Array(12).fill("E"),
        Array(2).fill("F"),
        Array(3).fill("G"),
        Array(2).fill("H"),
        Array(9).fill("I"),
        Array(1).fill("J"),
        Array(1).fill("K"),
        Array(4).fill("L"),
        Array(2).fill("M"),
        Array(6).fill("N"),
        Array(8).fill("O"),
        Array(2).fill("P"),
        Array(1).fill("Q"),
        Array(6).fill("R"),
        Array(4).fill("S"),
        Array(6).fill("T"),
        Array(4).fill("U"),
        Array(2).fill("V"),
        Array(2).fill("W"),
        Array(1).fill("X"),
        Array(2).fill("Y"),
        Array(1).fill("Z"),
        Array(2).fill("*")
    );

    points = {
        "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2,
        "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1,
        "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1,
        "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10, "*": 0,
        "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0,
        "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0,
        "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
    };

    getRandomTile(blank = true) {
        if (this.tiles.length === 0) {
            return null;
        }

        if (blank) {
            let random_index = Math.floor(Math.random() * this.tiles.length);
            let random_tile = this.tiles[random_index];
            this.tiles.splice(random_index, 1);
            return random_tile;
        } else {
            if (this.tiles.length === 1 && this.tiles.includes("*")) {
                return null;
            } else {
                while (true) {
                    let random_index = Math.floor(Math.random() * this.tiles.length);
                    let random_tile = this.tiles[random_index];
                    if (random_tile !== "*") {
                        this.tiles.splice(random_index, 1);
                        return random_tile;
                    }
                }
            }
        }
    }

    getTilePoints(tile) {
        return this.points[tile];
    }

    getTilesRemaining() {
        return this.tiles.length;
    }

}