class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {
    this.length -= 1;
    return this.data[this.length];
  }

  shift() {
  }

  unshift(val) {
  }

  indexOf (val) {
  }

  resize () {
  }

}


module.exports = DynamicArray;
