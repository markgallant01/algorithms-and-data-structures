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
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
