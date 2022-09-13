// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        // check for empty list
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            newNode.next.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        // check for empty list
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    removeFromHead() {
        // check for empty list
        if (this.length === 0) {
            return undefined;
        }
        else {
            let removedNode;

            // check for single element
            if (this.length === 1) {
                removedNode = this.head;
                this.head = null;
                this.tail = null;
            }
            else {
                removedNode = this.head;
                this.head = this.head.next;
                this.head.prev = null;
            }

            this.length--;
            return removedNode.value; 
        }
    }

    removeFromTail() {
        let removedNode;

        if (this.length === 0) {
            return undefined;
        }
        else {
            removedNode = this.tail;

            if (this.length === 1) {
                this.tail = null;
                this.head = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }

            this.length--;
        }

        return removedNode.value;
    }

    peekAtHead() {
        return this.head ? this.head.value : undefined;
    }

    peekAtTail() {
        return this.tail ? this.tail.value : undefined;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
