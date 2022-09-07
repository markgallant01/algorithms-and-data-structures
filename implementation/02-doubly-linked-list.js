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
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here
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
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        return this.head ? this.head.value : undefined;
    }

    peekAtTail() {
        // Return value of tail node
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
