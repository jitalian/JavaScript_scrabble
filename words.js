class TrieNode {
    children = {};
    completeWord = false;
}

export class Trie {
    constructor(words) {
        this.root = new TrieNode();
        this.words = words;
        // this.lines = words.split('\n');
        this.lines = words
        for (let i = 0; i < this.lines.length; i++) {
            this.insertWord(this.lines[i].slice(1, -1))
        }
        // for (let i = 0; i < 10; i++) {
        //     console.log(this.lines[i].slice(1, -1));
        // }
    }

    insertWord(word) {
        let currentNode = this.root;
        for (let letter of word) {
            if (!(letter in currentNode.children)) {
                currentNode.children[letter] = new TrieNode();
            }
            currentNode = currentNode.children[letter];
        }
        currentNode.completeWord = true;

    }

    findWord(word) {
        let currentNode = this.root;
        for (let letter of word) {
            if (!(letter in currentNode.children)) {
                return false;
            }
            currentNode = currentNode.children[letter];
        }
        return currentNode.completeWord;
    }

    findPrefix(prefix) {
        let currentNode = this.root;
        for (let letter of prefix) {
            if (!(letter in currentNode.children)) {
                return false;
            }
            currentNode = currentNode.children[letter];
        }
        return true;
    }



}