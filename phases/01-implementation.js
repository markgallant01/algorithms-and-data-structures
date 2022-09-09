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

  read(key) {
    let index = this.hashMod(key);
    let node = this.data[index];

    // check if any value was found
    if (!node) {
      return undefined;
    }
    else {
      // loop through found nodes for matching key
      while (node) {
        if (node.key === key) {
          return node.value;
        }
        else {
          node = node.next;
        }
      }
    }

  }


  resize() {
    let newCapacity = this.capacity * 2;
    let newData = new Array(newCapacity).fill(null);

    // iterate the old list and generate list of key-value pairs
    let keyValuePairs = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.data[i]) {
        let currentPair = this.data[i];
        while (currentPair) {
          keyValuePairs.push({key: currentPair.key, 
                              value: currentPair.value});
          currentPair = currentPair.next;
        }
      }
    }

    // update capacity and data, reset count;
    this.capacity = newCapacity;
    this.data = newData;
    this.count = 0;

    // rehash and insert all the old values to the new data list
    for (let i = 0; i < keyValuePairs.length; i++) {
      let pair = keyValuePairs[i];
      this.insert(pair.key, pair.value);
    }

  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
