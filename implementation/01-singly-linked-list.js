// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        let newNode = new SinglyLinkedNode(val);

        // check if list is empty
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            this.head = newNode;
        }

        this.length += 1;
        return this;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        // check if list is empty
        if (this.head) {
            // find end of the list and update with new node
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
            this.length += 1;
            return this;
        }
        else {
            // list is empty
            this.head = newNode;
            this.length += 1;
            return this;
        }
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
