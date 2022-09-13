class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    if (this.head) {
      let oldHead = this.head;

      this.head = new LinkedListNode(val);
      this.head.next = oldHead;
    }
    else {
      this.head = new LinkedListNode(val);
    }

    this.length += 1;
  }

  addToTail(val) {
    // see if there's a head node
    if (this.head) {
      // get to the last node
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new LinkedListNode(val);
    }
    else {
      // list is currently empty
      this.head = new LinkedListNode(val);
    }

    this.length += 1;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
