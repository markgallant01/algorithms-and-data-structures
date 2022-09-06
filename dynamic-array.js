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
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i+1] = this.data[i];
    }
    this.data[0] = val;
    this.length += 1;
  }

  indexOf (val) {
  }

  resize () {
  }

}


module.exports = DynamicArray;
