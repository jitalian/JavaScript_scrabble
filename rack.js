export class Rack {

    constructor(tilesBag) {
        this.tilesBag = tilesBag;
        this.rackArray = [];
        this.rackSize = 7
        for (let i = 0; i < this.rackSize; i++) {
            let randomTile = this.tilesBag.getRandomTile();
            this.rackArray.push([randomTile, this.tilesBag.getTilePoints(randomTile)]);
        }
    }

    createRack() {
        console.log(this.rackArray)
        let rack = document.getElementById('rack');
        rack.addEventListener('dragover', function (event) {
            event.preventDefault();
        })

        rack.addEventListener('drop', function (event) {
            rack.appendChild(document.getElementById(event.dataTransfer.getData("text")));
        })

        for (let i = 0; i < this.rackSize; i++) {
            let newTile = document.createElement('div');
            newTile.classList.add('tile');
            newTile.id = `tile-${i}`
            newTile.draggable = 'true';
            rack.appendChild(newTile);
            this.createTile(newTile.id, i)
        }
    }

    createTile(tileID, index) {

        let tile = document.getElementById(tileID);
        let parentElement;

        let letter = document.createElement('span');
        letter.classList.add('letter');
        letter.innerText = this.rackArray[index][0];
        tile.appendChild(letter);

        let score = document.createElement('sub');
        score.classList.add('letter-score');
        score.innerText = this.rackArray[index][1];
        tile.appendChild(score);

        tile.addEventListener('dragstart', function (event) {
            parentElement = event.target.parentElement;
            event.dataTransfer.setData("text", event.target.id);
        })

        tile.addEventListener('dragend', function (event) {
            parentElement.style.fontSize = '1.4rem';
        })
    }
}