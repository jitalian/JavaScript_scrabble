export class Rack {

    constructor(tilesBag) {
        this.tilesBag = tilesBag;
        this.rackArray = [];
        this.rackSize = 7
        this.currentWord = [];
    }

    createRack() {
        let rack = document.getElementById('rack');
        rack.addEventListener('dragover', function (event) {
            event.preventDefault();
        })

        rack.addEventListener('drop', (event) => {
            rack.appendChild(document.getElementById(event.dataTransfer.getData("text")));
        })

        for (let i = 0; i < this.rackSize; i++) {
            let newTile = document.createElement('div');
            newTile.classList.add('tile');
            newTile.id = `tile-${i}`
            newTile.draggable = 'true';
            rack.appendChild(newTile);
            this.createTile(newTile.id)
        }
    }

    createTile(tileID) {

        let tile = document.getElementById(tileID);
        let parentElement;
        let randomTile = this.tilesBag.getRandomTile();

        let letter = document.createElement('span');
        letter.classList.add('letter');
        letter.innerText = randomTile;
        tile.appendChild(letter);

        let score = document.createElement('sub');
        score.classList.add('letter-score');
        score.innerText = this.tilesBag.getTilePoints(randomTile)
        tile.appendChild(score);

        tile.addEventListener('dragstart', function (event) {
            parentElement = event.target.parentElement;
            event.dataTransfer.setData("text", event.target.id);
        })

        tile.addEventListener('dragend', (event) => {
            parentElement.style.fontSize = '1.4rem';
            if (parentElement.id !== 'rack') {
                for (let i = 0; i < this.currentWord.length; i++) {
                    if (this.currentWord[i][0] === parentElement.id) {
                        this.currentWord.splice(i, 1);
                        break;
                    }
                }
            }
        })

    }
}