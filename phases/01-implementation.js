class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let newNode = new KeyValuePair(key, value);
    let index = this.hashMod(newNode.key);

    // check for collision
    if (this.data[index]) {
      // check list for matching key
      let collision = true;
      let currentNode = this.data[index];

      while (currentNode) {
        if (currentNode.key === newNode.key) {
          // key match, no collision. update key.
          currentNode.value = newNode.value;
          collision = false;
          currentNode = null;     // end loop
        }
        else {
          currentNode = currentNode.next;
        }
      }

      // check for collision
      if (collision) {
        // add node to list
        newNode.next = this.data[index];
        this.data[index] = newNode;
        this.count++;
      }

    }
    else {
      this.data[index] = newNode;
      this.count++;
    }

  }

  _doesKeyExist(firstNode, key) {
    // search a linked list starting with 'firstNode' for 'key'
    let currentNode = firstNode;
    while (currentNode) {
      if (currentNode.key === key) {
        return true;
      }
      else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }


  read(key) {
    // Your code here
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
