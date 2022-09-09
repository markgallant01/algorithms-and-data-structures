const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);

    // set each array element to null
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = null;
    }
  }

  hash(key) {
    let hexString = sha256(key).toString().slice(0,8);
    return parseInt(hexString, 16);
  }

  hashMod(key) {
    let shaInt = this.hash(key);
    return shaInt % this.data.length;
  }

  insertNoCollisions(key, value) {
    let newNode = new KeyValuePair(key, value);
    let index = this.hashMod(newNode.key);

    // check for collision
    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }
    else {
      this.data[index] = newNode;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    let newNode = new KeyValuePair(key, value);
    let index = this.hashMod(newNode.key);

    // check for collision
    if (this.data[index]) {
      // handle collision
      newNode.next = this.data[index];
      this.data[index] = newNode;
    }
    else {
      this.data[index] = newNode;
    }

    this.count++;
  }

  insert(key, value) {
    let newNode = new KeyValuePair(key, value);
    let index = this.hashMod(newNode.key);

    // check for collision
    if (this.data[index]) {
      // look for key in linked list
      let collision = true;
      let currentNode = this.data[index];
      while (currentNode) {
        if (currentNode.key === newNode.key) {
          // update the value
          currentNode.value = newNode.value;
          collision = false;

          // stop loop
          currentNode = false;
        }
        else {
          // keep looking through linked list
          currentNode = currentNode.next;
        }
      }

      // if collision then add newNode to linked list
      if (collision) {
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

}


module.exports = HashTable;
