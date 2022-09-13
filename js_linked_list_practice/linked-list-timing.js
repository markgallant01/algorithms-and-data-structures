const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const ll = new LinkedList();
const dll = new DoublyLinkedList();

// addToHead - should be identical
let ll_start = Date.now();

for (let i = 0; i < 100000; i++) {
  // call addToHead one-hundred-thousand times on the singly-linked list
  ll.addToHead(i);
}

let ll_end = Date.now();
console.log(`Singly-linked list addToHead: ${ll_end - ll_start}ms`);

let dll_start = Date.now();

for (let i = 0; i < 100000; i++) {
  // call addToHead one-hundred-thousand times on the doubly-linked list
  dll.addToHead(i);
}

let dll_end = Date.now();
console.log(`Doubly-linked list addToHead: ${dll_end - dll_start}ms`);

// addToTail - Doubly should be much faster
const ll_2 = new LinkedList();
const dll_2 = new DoublyLinkedList();

ll_start = Date.now();

for (let i = 0; i < 100000; i++) {
  // call addToTail one-hundred-thousand times on the singly-linked list
  ll_2.addToTail(i);
}

ll_end = Date.now();
console.log(`Singly-linked list addToHead: ${ll_end - ll_start}ms`);

dll_start = Date.now();

for (let i = 0; i < 100000; i++) {
  // call addToTail one-hundred-thousand times on the doubly-linked list
  dll_2.addToTail(i);
}

dll_end = Date.now();
console.log(`Doubly-linked list addToHead: ${dll_end - dll_start}ms`);

