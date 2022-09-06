class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // create new node
    let node = new DoublyLinkedListNode(val);

    if (this.head) {
      // list is not empty, only set head
      node.next = this.head;
      node.next.prev = node;
      this.head = node;
    }
    else {
      // list is empty, set both head and tail
      this.head = node;
      this.tail = node;
    }

    this.length += 1;
  }

  addToTail(val) {
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
