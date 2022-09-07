const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        
        // check for empty list
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
    }

    dequeue() {
        // Remove node from front of queue (linked list)
       
        // check for empty queue
        if (this.length === 0) {
            return null;
        }
        else {
            let removedNode;

            // check for only one node
            if (this.length === 1) {
                removedNode = this.head;
                this.head = null;
                this.tail = null;
            }
            else {
                removedNode = this.head;
                this.head = this.head.next;
            }

            this.length--;
            return removedNode.value;
        }
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
