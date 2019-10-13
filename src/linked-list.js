const Node = require('./node');


class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {

        let newNode = new Node(data);
        if (!this._tail) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this.length += 1;
        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        }
        return this._head.data;

    }

    tail() {
        if (this._tail === null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        if (!this._head) {
            console.log("The list is empty");
            return;
        }

        let node = this._head;
        let counter = 0;
        while (counter < index) {
            counter++;
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {

        let node = new Node(data);
        let replacedNode = this._head;

        if (this.length === 0) {
            this.append(data);
            this.length += 1;
            return this;
        }

        let counter = 0;
        while (counter < index) {
            counter++;
            replacedNode = replacedNode.next;
        }
        node.prev = replacedNode.prev;
        node.next = replacedNode;
        replacedNode.prev.next = node;
        replacedNode.prev = node;
        this.length += 1


    }

    isEmpty() {
        return Boolean(!this._head);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        let node = this._head;

        if (index === 0 && this.length === 1) {
            return this.clear();
        }
        let counter = 0;

        while (counter <= index) {
            if (counter === index) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            node = node.next;
            counter++;
        }
        this.length -= 1;
        return this;
    }

    reverse() {
        let startingNode = this._head;
        let finishingNode = this._tail;
        let temp;
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            temp = startingNode.data;
            startingNode.data = finishingNode.data;
            finishingNode.data = temp;
            startingNode = startingNode.next;
            finishingNode = finishingNode.prev;
        }
        return this;
    }

    indexOf(data) {
        let node = this._head;
        for (let i = 0; i < this.length; i++) {
            if (node.data === data) {
                return i;
            }
            node = node.next;
        }
        return -1;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
let a = new LinkedList();

module.exports = LinkedList;

