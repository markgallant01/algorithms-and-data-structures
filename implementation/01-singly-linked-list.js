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
        let returnNode;

        // return undefined if the list is empty
        if (!this.head) {
            return returnNode;
        }
        else {
            // make sure there's a node after the 1st to point to
            if (this.head.next) {
                returnNode = this.head;
                this.head = this.head.next;
                this.length -= 1;
                return returnNode;
            }
            else {
                // list is only one node long, head sets to null
                returnNode = this.head;
                this.head = null;
                this.length -= 1;
                return returnNode;
            }
        }
    }

    removeFromTail() {
        let removedNode;

        // check for empty list
        if (!this.head) {
            return removedNode;
        }
        else {
            if (this.length === 1) {
                // only one single node, head gets null
                removedNode = this.head;
                this.head = null
                this.length -= 1;
                return removedNode;
            }
            else {
                // iterate to the final node
                let prevNode = this.head;
                let currentNode = this.head.next;
                while (currentNode.next) {
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }

                prevNode.next = null;
                this.length -= 1;
                return currentNode;
            }
        }
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
